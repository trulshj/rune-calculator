import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Calculator from "../components/Calculator";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rune Calculator</title>
        <meta
          name="description"
          content="A leveling calculator for Elden Ring"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Elden Ring
          <br />
          Rune Calculator
        </h1>

        <Calculator />
      </main>

      <footer className={styles.footer}>
        Made by{" "}
        <a
          href="https://github.com/trulshj"
          target="_blank"
          rel="noopener noreferrer"
        >
          @trulshj
        </a>
      </footer>
    </div>
  );
};

export default Home;
