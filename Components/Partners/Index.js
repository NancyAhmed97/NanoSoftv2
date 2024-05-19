import { useTranslations } from "next-intl";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./Partners.module.css";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Index({ state }) {
    const t = useTranslations("general");
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const phoneNumber = '+201000943383'; // Replace with the phone number you want to send the message to
    const encodedMessage = encodeURIComponent('Can tell me about your courses');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${'Can tell me about your courses?'}`;

    return (
        <div className={Styles.serviceContainer}>
            <div className={Styles.title}>
                <h3>{t("partnersTitle")}</h3>
            </div>
            {/* <div className={Styles.cardContainer} >
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
          </Row>
        </Container>
      </div> */}
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={2000}
                autoPlay={true}
                arrows={false}
            >
                <div className={Styles.card}>
                    <img
                        src="/Logo.cd2f6a51098336f66c866c2dfe881423.svg"
                        alt="logo"
                        style={{ width: "180px"}}
                    />
                </div>
                <div className={Styles.card}>
                <img
                        src="/clientlogo.jpg"
                        alt="logo"
                        style={{ width: "180px"}}
                    />
                    
                    </div>
                <div className={Styles.card}>

                <img
                        src="/logobravo.png"
                        alt="logo"
                        style={{ width: "180px"}}
                    />
                
                </div>
                <div className={Styles.card}>

                <img
                        src="/Beyond Logo 1.png"
                        alt="logo"
                        style={{ width: "180px"}}
                    />
                
                </div>
                <div className={Styles.card}>

                <img
                        src="/baa.jpg"
                        alt="logo"
                        style={{ width: "180px"}}
                    />
                
                </div>
                <div className={Styles.card}>

                <img
                        src="/logoClient.png"
                        alt="logo"
                        style={{ width: "180px"}}
                    />
                
                </div>
                <div className={Styles.card}>

                <img
                        src="/logo1.png"
                        alt="logo"
                        style={{ width: "180px"}}
                    />
                
                </div>
            </Carousel>
        </div>
    )
}

export default Index
