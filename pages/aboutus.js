
import React from "react";
import AboutInfo from "../Components/Aboutus/AboutInfo";
import Aboutus from "../Components/Aboutus/Aboutus";
import Header from "../Components/Common/Header";
import { useTranslations } from "next-intl";

export default function AboutusPage() {
  const t = useTranslations("general");
  return (
    <>
      <Header title={t("about")} />
      <Aboutus />
      <AboutInfo />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: require("../locales/" + locale + ".json"),
    },
  };
}
