import classes from "styles/pages/home.module.scss";
import BaseLayout from "components/layout";
import dynamic from "next/dynamic";

const DND = dynamic(() => import("components/Dnd"), { ssr: false });

const Home = () => {
  return (
    <BaseLayout>
      <section className={classes.firstSection}>
        <DND />
      </section>
    </BaseLayout>
  );
};

export default Home;
