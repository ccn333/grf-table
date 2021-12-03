import Window from "components/Window/Window";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";

const Table: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>table</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      Table page
      <Window />
    </div>
  );
};

export default Table;