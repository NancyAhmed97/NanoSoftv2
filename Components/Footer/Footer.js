import React from 'react'
import { useTranslations } from "next-intl";
import styles from "./Footer.module.css"
export default function Footer() {
  const t = useTranslations("general");

  return (
    <div className={styles.footerContainer}>
      <p className="p-0 m-0 text-base text-white">{t('Rights')}{" "}{t('nanoSoft')}{" "}2022</p>
    </div>
  )
}
