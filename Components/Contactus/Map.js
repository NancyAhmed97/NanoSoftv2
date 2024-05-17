import React from "react";
import styles from "./Contactus.module.css";
export default function Map() {
  return (
    <div className={styles.mapContainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385395.5590021262!2d29.292371950131752!3d41.00550052011669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2z2KXYs9i32YbYqNmI2YTYjCDYqtix2YPZitin!5e0!3m2!1sar!2seg!4v1656334215535!5m2!1sar!2seg"
        height="500"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
