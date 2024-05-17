import { useTranslations } from "next-intl";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useRouter } from "next/router";
import styles from "./Common.module.css";
export default function Header({ title }) {
  const t = useTranslations("general");
  const router = useRouter();
  const { locale } = router;

  return (
    <div className={styles.headerContaier}>
      <div className={styles.overlay}></div>
      <h2 className={locale == "ar" ? styles.arTitleHeader : styles.enTitleHeader}>{title}</h2>
      <p className={styles.titleContainer}>
        {t("home")}{" "}
        {locale == "en" ? <ChevronRightIcon /> : <KeyboardArrowLeftIcon />}{" "}
        {title}
      </p>
    </div>
  );
}
