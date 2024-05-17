import { useTranslations } from "next-intl";
import React from "react";
import styles from "./Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Home() {
  const t = useTranslations("general");
  const { locale } = useRouter();
  return (
    <>
      <div
        className={
          locale == "en" ? styles.video_container : styles.ar_video_container
        }
        
      >
           <div className={styles.text_container} style={{zIndex:"10"}}>
          <h1>{t("headerTitle")}</h1>
          <p>{t("headerPara")} </p>
          <a href="/contact-us">{t("contact")}</a>
        </div>
        <div className={styles.overlay}></div>
     

        <video width="320" height="240" autoPlay={true}  loop={true} muted>
          <source
            src="/4K Business Meeting Stock Footage _ Copyright Free Videos.mp4"
            type="video/mp4"
          />
          <source
            src="/4K Business Meeting Stock Footage _ Copyright Free Videos.mp4"
            type="video/ogg"
          />
        </video>
      </div>
    </>

  );
}
