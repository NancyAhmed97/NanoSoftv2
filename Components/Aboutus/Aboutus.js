import { useTranslations } from "next-intl";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Aboutus.module.css";
export default function Aboutus() {
    const t=useTranslations('general')
  return (
    <div className={styles.aboutContainer}>
      <Container fluid>
        <Row>
          <Col md={6}>
            <div className={styles.aboutDes}>
                <h2 className="fw-bold">{t('about')}</h2>
                <p>{t('aboutParag')}</p>
                <p className="mt-4">{t('aboutDes')}</p>
            </div>
          </Col>
          <Col md={6}>
            <div className={styles.aboutImg}>
              <img src="/about.png" alt="about" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
