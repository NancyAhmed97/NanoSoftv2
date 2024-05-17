import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "./Contactus.module.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useRouter } from "next/router";
export default function contactus() {
  const t = useTranslations("general");
  const router=useRouter()
  const {locale}=router;

  return (
    <div className={styles.contactus}>
      <Container fluid>
        <Row>
          <Col md={4}>
            <Link href="/">
              <img
                src="/logo-svg.png"
                alt="logo"
                style={{ width: "200px", cursor: "poiter" }}
              />
            </Link>{" "}
            <div className={locale=="ar"?styles.arAboutParag:styles.enAboutParag}>{t("aboutParag")}</div>
          </Col>
          <Col md={4}>
            <h3 className={styles.quickLinks}>{t("quickLinks")}</h3>
            <ul className={styles.navItem}>
              <li>
                {" "}
                <Link href="/">{t("home")}</Link>
              </li>
              <li>
                {" "}
                <Link href="/aboutus">{t("about")}</Link>
              </li>
              <li>
                {" "}
                <Link href="/services">{t("services")}</Link>
              </li>
              <li>
                {" "}
                <Link href="/contact-us">{t("contact")}</Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
          <h3 className={styles.quickLinks}>{t("quickLinks")}</h3>
            <div className={styles.socialMedia}>
              <a href="https://wa.me/+201000943383">
                {" "}
                <div className={styles.whatsapp}>
                  <WhatsAppIcon className={styles.whatsAppIcon} />
                </div>
              </a>
              <a href="https://www.facebook.com/Nanosoft.programming">
                {" "}
                <div className={styles.whatsapp}>
                  <FacebookIcon className={styles.whatsAppIcon} />
                </div>
              </a>
              <a href="https://www.instagram.com/nanosoft.programming/">
                {" "}
                <div className={styles.whatsapp}>
                  <InstagramIcon className={styles.whatsAppIcon} />
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
