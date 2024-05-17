import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { NextIntlProvider } from "next-intl";

import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Contactus from "../Components/Contactus/Contactus";
import { useRouter } from "next/router";
import Script from "next/script";
import Head from "next/head";
import { Container } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  useEffect(() => {
    document
      .querySelector("html")
      .setAttribute("dir", locale === "ar" ? "rtl" : "ltr");
    import("bootstrap/dist/js/bootstrap");
  }, [locale]);

  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <Navbar />
        {/* <Container className=""> */}
        <Component {...pageProps} />
        {/* </Container> */}
        <Contactus />
        <Footer />

        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></Script>
        <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></Script>
      </div>
    </NextIntlProvider>
  );
}

export default MyApp;
export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: require("../locales/" + locale + ".json"),
    },
  };
}
