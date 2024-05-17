import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./Navbar.module.css";
export default function Navbar() {
  const router = useRouter();
  const { locale } = router;
  const { asPath } = router;
  const t = useTranslations("general");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container-fluid">
        <Link href="/">
          <img
            src="/logo-svg.png"
            alt="logo"
            style={{ width: "200px", cursor: "poiter" }}
          />
        </Link>{" "}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{zIndex:"500000"}}>
          <ul
            className={
              locale === "en"
                ? "navbar-nav ms-auto mb-2 mb-lg-0 "
                : "navbar-nav me-auto mb-2 mb-lg-0 "
            }
            
          >
            <li  className={asPath=="/"?"nav-item active":"nav-item "}>
              <Link href="/">{t("home")}</Link>
            </li>
            <li  className={asPath=="/aboutus"?"nav-item active":"nav-item "}>
              <Link href="/aboutus">{t("about")}</Link>
            </li>
            <li   className={asPath=="/services"?"nav-item active":"nav-item "}>
              <Link href="/services">{t("services")}</Link>

            </li>
            <li   className={asPath=="/contact-us"?"nav-item active":"nav-item "}>
              <Link href="/contact-us">{t("contact")}</Link>
            </li>
          </ul>
          <form className="d-flex">
            <p className={styles.lang}>
              {locale === "ar" ? (
                <Link
                  className={styles.langLinks}
                  color="initial"
                  href={asPath}
                  locale={"en"}
                >
                  English
                </Link>
              ) : (
                <Link
                  color="initial"
                  href={asPath}
                  locale={"ar"}
                  className={styles.arLangLinks}
                >
                  العربية
                </Link>
              )}
            </p>
          </form>
        </div>
      </div>
    </nav>
  );
}
