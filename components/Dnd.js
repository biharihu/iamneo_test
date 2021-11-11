import { useState } from "react";
import classes from "styles/pages/home.module.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { processColumns } from "lib/data";

const DND = () => {
  const [columns, setColumns] = useState(processColumns);

  return (
    <div className={classes.dnd}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column]) => {
          return (
            <div key={columnId} className={classes.dnd__columns}>
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    const borderColor = snapshot.isDraggingOver
                      ? "red"
                      : "#ccc";
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={classes.dnd__columns_column}
                        style={{ borderColor }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                const borderColor = snapshot.isDragging
                                  ? "red"
                                  : "#ccc";
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={classes.item}
                                    style={{
                                      ...provided.draggableProps.style,
                                      borderColor,
                                    }}
                                  >
                                    {item.userName}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) {
    return;
  }
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

export default DND;
