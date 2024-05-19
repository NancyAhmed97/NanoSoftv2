import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Service from "../Components/Services/index";
import HomePage from "../Components/Home/index";
import Aboutus from "../Components/Aboutus/Aboutus";
import Courses from "../Components/Courses/Index";
import Partners from "../Components/Partners/Index";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NanoSoft</title>
        <meta name="description" content="NonoSoft" />
        <link rel="icon" href="/logoImg.JPEG" />
      </Head>
      <HomePage />
      <Aboutus />
      <Service />
      <Courses/>
      <Partners/>
    </div>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: require("../locales/" + locale + ".json"),
    },
  };
}
