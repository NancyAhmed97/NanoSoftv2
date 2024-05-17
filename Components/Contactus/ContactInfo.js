import React from "react";
import styles from "./Contactus.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
export default function ContactInfo() {
  const t = useTranslations("general");
  const router = useRouter();
  const { locale } = router;
  return (
    <div className={styles.ContactInfo}>
      <Container fluid>
        <Row>
          <Col md={6} className="py-3">
            <div className={styles.CardContainer}>
              <a
                href="mailto:nanosoft226@gmail.com"
                style={{ textDecoration: "none" }}
              >
                <div className="d-flex justify-content-center">
                  <div className={styles.locationIcon}>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.6665 27.3333H9.33317C5.33317 27.3333 2.6665 25.3333 2.6665 20.6667V11.3333C2.6665 6.66666 5.33317 4.66666 9.33317 4.66666H22.6665C26.6665 4.66666 29.3332 6.66666 29.3332 11.3333V20.6667C29.3332 25.3333 26.6665 27.3333 22.6665 27.3333Z"
                        stroke="hsl(312deg 40% 51%)"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M22.6668 12L18.4935 15.3333C17.1202 16.4267 14.8668 16.4267 13.4935 15.3333L9.3335 12"
                        stroke="hsl(312deg 40% 51%)"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p className={styles.locationName}>
                  nanosoft226@gmail.com
                </p>
              </a>
            </div>
          </Col>
          <Col md={6} className="py-3">
            <div className={styles.CardContainer}>
              <a href="tel:+201000943383" style={{ textDecoration: "none" }}>
                <div className="d-flex justify-content-center">
                  <div className={styles.locationIcon}>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.2932 24.44C29.2932 24.92 29.1865 25.4133 28.9598 25.8933C28.7332 26.3733 28.4398 26.8267 28.0532 27.2533C27.3998 27.9733 26.6798 28.4933 25.8665 28.8267C25.0665 29.16 24.1998 29.3333 23.2665 29.3333C21.9065 29.3333 20.4532 29.0133 18.9198 28.36C17.3865 27.7067 15.8532 26.8267 14.3332 25.72C12.7998 24.6 11.3465 23.36 9.95984 21.9867C8.5865 20.6 7.3465 19.1467 6.23984 17.6267C5.1465 16.1067 4.2665 14.5867 3.6265 13.08C2.9865 11.56 2.6665 10.1067 2.6665 8.72C2.6665 7.81333 2.8265 6.94666 3.1465 6.14666C3.4665 5.33333 3.97317 4.58666 4.67984 3.92C5.53317 3.08 6.4665 2.66666 7.45317 2.66666C7.8265 2.66666 8.19984 2.74666 8.53317 2.90666C8.87984 3.06666 9.1865 3.30666 9.4265 3.65333L12.5198 8.01333C12.7598 8.34666 12.9332 8.65333 13.0532 8.94666C13.1732 9.22666 13.2398 9.50666 13.2398 9.76C13.2398 10.08 13.1465 10.4 12.9598 10.7067C12.7865 11.0133 12.5332 11.3333 12.2132 11.6533L11.1998 12.7067C11.0532 12.8533 10.9865 13.0267 10.9865 13.24C10.9865 13.3467 10.9998 13.44 11.0265 13.5467C11.0665 13.6533 11.1065 13.7333 11.1332 13.8133C11.3732 14.2533 11.7865 14.8267 12.3732 15.52C12.9732 16.2133 13.6132 16.92 14.3065 17.6267C15.0265 18.3333 15.7198 18.9867 16.4265 19.5867C17.1198 20.1733 17.6932 20.5733 18.1465 20.8133C18.2132 20.84 18.2932 20.88 18.3865 20.92C18.4932 20.96 18.5998 20.9733 18.7198 20.9733C18.9465 20.9733 19.1198 20.8933 19.2665 20.7467L20.2798 19.7467C20.6132 19.4133 20.9332 19.16 21.2398 19C21.5465 18.8133 21.8532 18.72 22.1865 18.72C22.4398 18.72 22.7065 18.7733 22.9998 18.8933C23.2932 19.0133 23.5998 19.1867 23.9332 19.4133L28.3465 22.5467C28.6932 22.7867 28.9332 23.0667 29.0798 23.4C29.2132 23.7333 29.2932 24.0667 29.2932 24.44Z"
                        stroke="hsl(312deg 40% 51%)"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      ></path>
                      <path
                        d="M24.6667 12C24.6667 11.2 24.04 9.97333 23.1067 8.97333C22.2533 8.05333 21.12 7.33333 20 7.33333"
                        stroke="hsl(312deg 40% 51%)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M29.3333 12C29.3333 6.84 25.16 2.66666 20 2.66666"
                        stroke="hsl(312deg 40% 51%)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p className={styles.locationName}>
                  {locale == "ar" ? "905071761397+" : "+201000943383"}
                </p>
              </a>
            </div>
          </Col>
          {/* <Col md={4}>
            <div className={styles.CardContainer}>
              <a href="" style={{ textDecoration: "none" }}>
                <div className={styles.locationIcon}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.05322 10.3733V23.3467C3.05322 25.88 4.85322 26.92 7.03989 25.6667L10.1732 23.88C10.8532 23.4933 11.9866 23.4533 12.6932 23.8133L19.6932 27.32C20.3999 27.6667 21.5332 27.64 22.2132 27.2533L27.9866 23.9467C28.7199 23.52 29.3332 22.48 29.3332 21.6267V8.65333C29.3332 6.12 27.5332 5.08 25.3466 6.33333L22.2132 8.12C21.5332 8.50667 20.3999 8.54667 19.6932 8.18667L12.6932 4.69333C11.9866 4.34667 10.8532 4.37333 10.1732 4.76L4.39989 8.06667C3.65322 8.49333 3.05322 9.53333 3.05322 10.3733Z"
                      stroke="hsl(312deg 40% 51%)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11.4136 5.33334V22.6667"
                      stroke="hsl(312deg 40% 51%)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M20.9731 8.82667V26.6667"
                      stroke="hsl(312deg 40% 51%)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <p className={styles.locationName}>
                  {t("istanbul")} , {t("turkey")}
                </p>
              </a>
            </div>
          </Col>
          <Col md={4}>
            <div className={styles.CardContainer}>
              <a
                href="mailto:nanosoft226@gmail.com"
                style={{ textDecoration: "none" }}
              >
                <div className={styles.locationIcon}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.6665 27.3333H9.33317C5.33317 27.3333 2.6665 25.3333 2.6665 20.6667V11.3333C2.6665 6.66666 5.33317 4.66666 9.33317 4.66666H22.6665C26.6665 4.66666 29.3332 6.66666 29.3332 11.3333V20.6667C29.3332 25.3333 26.6665 27.3333 22.6665 27.3333Z"
                      stroke="hsl(312deg 40% 51%)"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M22.6668 12L18.4935 15.3333C17.1202 16.4267 14.8668 16.4267 13.4935 15.3333L9.3335 12"
                      stroke="hsl(312deg 40% 51%)"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <p className={styles.locationName}>
                  nanosoft226@gmail.com
                </p>
              </a>
            </div>
          </Col>
          <Col md={4}>
            <div className={styles.CardContainer}>
              <a href="tel:+201000943383" style={{ textDecoration: "none" }}>
                <div className={styles.locationIcon}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.2932 24.44C29.2932 24.92 29.1865 25.4133 28.9598 25.8933C28.7332 26.3733 28.4398 26.8267 28.0532 27.2533C27.3998 27.9733 26.6798 28.4933 25.8665 28.8267C25.0665 29.16 24.1998 29.3333 23.2665 29.3333C21.9065 29.3333 20.4532 29.0133 18.9198 28.36C17.3865 27.7067 15.8532 26.8267 14.3332 25.72C12.7998 24.6 11.3465 23.36 9.95984 21.9867C8.5865 20.6 7.3465 19.1467 6.23984 17.6267C5.1465 16.1067 4.2665 14.5867 3.6265 13.08C2.9865 11.56 2.6665 10.1067 2.6665 8.72C2.6665 7.81333 2.8265 6.94666 3.1465 6.14666C3.4665 5.33333 3.97317 4.58666 4.67984 3.92C5.53317 3.08 6.4665 2.66666 7.45317 2.66666C7.8265 2.66666 8.19984 2.74666 8.53317 2.90666C8.87984 3.06666 9.1865 3.30666 9.4265 3.65333L12.5198 8.01333C12.7598 8.34666 12.9332 8.65333 13.0532 8.94666C13.1732 9.22666 13.2398 9.50666 13.2398 9.76C13.2398 10.08 13.1465 10.4 12.9598 10.7067C12.7865 11.0133 12.5332 11.3333 12.2132 11.6533L11.1998 12.7067C11.0532 12.8533 10.9865 13.0267 10.9865 13.24C10.9865 13.3467 10.9998 13.44 11.0265 13.5467C11.0665 13.6533 11.1065 13.7333 11.1332 13.8133C11.3732 14.2533 11.7865 14.8267 12.3732 15.52C12.9732 16.2133 13.6132 16.92 14.3065 17.6267C15.0265 18.3333 15.7198 18.9867 16.4265 19.5867C17.1198 20.1733 17.6932 20.5733 18.1465 20.8133C18.2132 20.84 18.2932 20.88 18.3865 20.92C18.4932 20.96 18.5998 20.9733 18.7198 20.9733C18.9465 20.9733 19.1198 20.8933 19.2665 20.7467L20.2798 19.7467C20.6132 19.4133 20.9332 19.16 21.2398 19C21.5465 18.8133 21.8532 18.72 22.1865 18.72C22.4398 18.72 22.7065 18.7733 22.9998 18.8933C23.2932 19.0133 23.5998 19.1867 23.9332 19.4133L28.3465 22.5467C28.6932 22.7867 28.9332 23.0667 29.0798 23.4C29.2132 23.7333 29.2932 24.0667 29.2932 24.44Z"
                      stroke="hsl(312deg 40% 51%)"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    ></path>
                    <path
                      d="M24.6667 12C24.6667 11.2 24.04 9.97333 23.1067 8.97333C22.2533 8.05333 21.12 7.33333 20 7.33333"
                      stroke="hsl(312deg 40% 51%)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M29.3333 12C29.3333 6.84 25.16 2.66666 20 2.66666"
                      stroke="hsl(312deg 40% 51%)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <p className={styles.locationName}>+201000943383</p>
              </a>
            </div>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}
