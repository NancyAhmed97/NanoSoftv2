import { useTranslations } from "next-intl";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./Courses.module.css";
import Link from "next/link";

function Index({state}) {
    const t = useTranslations("general");
const coursesItem=[
    {id:1,Name:"Full Stack Development (React.js - Node.js)",Image:'./why-combine-react-and-node-js-for-full-stack-web-development.jpg'},
    {id:2,Name:"Full Stack Development (React.js - PHP)",Image:'.//1694682026.png'},
    {id:3,Name:"Front-end (React.js)",Image:'./download.png'},
    {id:4,Name:"Front-end (Angular)",Image:'../Angular_full_color_logo.svg.png'},
    {id:5,Name:"Backend (Node.js)",Image:'./1_TY9uBBO9leUbRtlXmQBiug.png'},
    {id:6,Name:"Backend (PHP)",Image:'./PHP-logo.svg.png'},
    {id:7,Name:"Flutter",Image:'./1_5-aoK8IBmXve5whBQM90GA.png'},

]
const phoneNumber = '+201000943383'; // Replace with the phone number you want to send the message to
const encodedMessage = encodeURIComponent('Can tell me about your courses');
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${'Can tell me about your courses?'}`;

  return (
    <div className={Styles.serviceContainer}>
      <div className={Styles.title}>
        <h3>{t("coursesTitle")}</h3>
      </div>
      <div className={Styles.cardContainer} >
        <Container fluid>
          <Row>
            {coursesItem.map((item)=>{
                return(
                    <Col md={4} style={{marginBottom:"25px",cursor:'pointer'}}>
                    <Link href={whatsappUrl}>
                      <div className={Styles.card}>
                        <div className={Styles.cardHeader}>
                        <img src={item.Image} alt="appImg" />
        
                        </div>
                        <div className={state ? Styles.cardBodyDes : Styles.cardBody}>
                          <h3>{item.Name}</h3>
                          {state && <p>{t("appDesc")}</p>}
                        </div>
                      </div>
                      </Link>
                    </Col>
                )
            })}
            {/* <Col md={4} style={{marginBottom:"25px"}}>
            <Link href={`/service`}>
              <div className={Styles.card}>
                <div className={Styles.cardHeader}> 
                <img src="./webImg.png" alt="webImg" />

                </div>
                <div className={state ? Styles.cardBodyDes : Styles.cardBody}>
                  <h3>{t("websiteDevelopment")}</h3>
                  {state && <p>{t("webDesc")}</p>}
                </div>
              </div>
              </Link>
            </Col>
            <Col md={4} style={{marginBottom:"25px"}}>
            <Link href={`/service`}>
              <div className={Styles.card}>
                <div className={Styles.cardHeader}>
                <img src="./appImg.png" alt="appImg" />

                </div>
                <div className={state ? Styles.cardBodyDes : Styles.cardBody}>
                  <h3>{t("appDeveloper")}</h3>
                  {state && <p>{t("appDesc")}</p>}
                </div>
              </div>
              </Link>
            </Col>
            <Col md={4} style={{marginBottom:"25px"}}>
            <Link href={`/service`}>
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
              </Link>
            </Col> */}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Index
