import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Feature from "../components/Feature";
import PizzaList from "../components/PizzaList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Pizza for everyone!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feature />
      <PizzaList />
      <Footer />
    </div>
  );
}
