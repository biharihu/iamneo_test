const users = [
  { id: "1", userName: "User One" },
  { id: "2", userName: "User Two" },
  { id: "3", userName: "User Three" },
  { id: "4", userName: "User Four" },
  { id: "5", userName: "User Five" },
];

const processColumns = {
  NewUsers: {
    name: "New Users",
    items: users,
  },
  InProgress: {
    name: "In Progress",
    items: [],
  },
  Confirmed: {
    name: "Confirmed",
    items: [],
  },
  ApplicationCompleted: {
    name: "Application Completed",
    items: [],
  },
};

export { users, processColumns };
