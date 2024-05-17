import { useTranslations } from "next-intl";
import React from "react";
import Header from "../../Components/Common/Header";
import Service from "../../Components/Services/index";
import styles from "./services.module.css";
export default function Index() {
  const t = useTranslations("general");
  return (
    <div className={styles.serviceContainer}>
      <Header title={t("services")} />
      <Service state={true} />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: require("../../locales/" + locale + ".json"),
    },
  };
}
