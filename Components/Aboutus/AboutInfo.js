import { useTranslations } from "next-intl";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Aboutus.module.css";
export default function AboutInfo() {
  const t = useTranslations("general");
  return (
    <div className={styles.aboutInfoContainer}>
      <Container fluid>
        <Row>
          <Col md={6}>
            <div className={styles.visionTitle}>{t("vision")}</div>
            <div className={styles.visionDesc}>{t('visionDesc')}</div>
          </Col>
          <Col md={6}>
            <div className={styles.visionTitle}>{t("goal")}</div>
            <div className={styles.visionDesc}>{t('goalDesc')}</div>

          </Col>
          <Col md={6}>
            {" "}
            <div className={styles.visionTitle}>{t("message")}</div>
            <div className={styles.visionDesc}>{t('messageDesc')}</div>

          </Col>
          <Col md={6}>
            {" "}
            <div className={styles.visionTitle}>{t("value")}</div>
            <div className={styles.visionDesc}>{t('valueDesc')}</div>

          </Col>
        </Row>
      </Container>
    </div>
  );
}
