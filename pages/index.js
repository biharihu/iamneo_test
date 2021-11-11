import BaseLayout from "components/layout";
import dynamic from "next/dynamic";

const DND = dynamic(() => import("components/Dnd"), { ssr: false });

const Home = () => {
  return (
    <BaseLayout>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <DND />
      </section>
    </BaseLayout>
  );
};

export default Home;
