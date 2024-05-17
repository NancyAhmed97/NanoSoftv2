import { useTranslations } from "next-intl";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./Services.module.css";
export default function index({ state }) {
  const t = useTranslations("general");
  return (
    <div className={Styles.serviceContainer}>
      <div className={Styles.title}>
        <h3>{t("ourServices")}</h3>
      </div>
      <div className={Styles.cardContainer} >
        <Container fluid>
          <Row>
            <Col md={4} style={{marginBottom:"25px"}}>
           
              <div className={Styles.card}>
                <div className={Styles.cardHeader}> 
                <img src="./webImg.png" alt="webImg" />

                </div>
                <div className={state ? Styles.cardBodyDes : Styles.cardBody}>
                  <h3>{t("websiteDevelopment")}</h3>
                  {state && <p>{t("webDesc")}</p>}
                </div>
              </div>
             
            </Col>
            <Col md={4} style={{marginBottom:"25px"}}>
           
              <div className={Styles.card}>
                <div className={Styles.cardHeader}>
                <img src="./appImg.png" alt="appImg" />

                </div>
                <div className={state ? Styles.cardBodyDes : Styles.cardBody}>
                  <h3>{t("appDeveloper")}</h3>
                  {state && <p>{t("appDesc")}</p>}
                </div>
              </div>
             
            </Col>
            <Col md={4} style={{marginBottom:"25px"}}>
           
              <div className={Styles.card}>
                <div className={Styles.cardHeader}>
                  {" "}
                  <img src="./uxImg.png" alt="uxImg" />
                </div>
                <div className={state ? Styles.cardBodyDes : Styles.cardBody}>
                  <h3>{t("userExp")}</h3>
                  {state && <p>{t("userDesc")}</p>}
                </div>
              </div>
             
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
