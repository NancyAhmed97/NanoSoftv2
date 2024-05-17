import { useTranslations } from 'next-intl';
import React from 'react'
import Header from '../../Components/Common/Header';
import ContactInfo from '../../Components/Contactus/ContactInfo';
import Map from '../../Components/Contactus/Map';

export default function Index() {
  const t = useTranslations("general");
  return (
    <div>
      <Header title={t('contact')} />
      <ContactInfo />
      <Map />
    </div>
  )
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: require("../../locales/" + locale + ".json"),
    },
  };
}