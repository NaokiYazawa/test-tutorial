import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { Counter } from "../components/Counter";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Counter defaultCount={10} description="WWW" />
    </div>
  );
};

export default Home;
