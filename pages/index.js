import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import HomePage from "../screens/HomePage";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <HomePage />
      </div>
    </>
  );
}
