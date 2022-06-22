import type { NextPage } from "next";
import Head from "next/head";
import Education from "../content/tables/education/education";
import Relationships from "../content/tables/relationships/relationships";
import Resources from "../content/tables/resources/resources";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GNG Budget</title>
        <meta name="description" content="A Ghud Not Great Budget app." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Education />
        <Relationships />
        <Resources />
      </main>
    </div>
  );
};

export default Home;
