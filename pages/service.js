import React from 'react'
import Header from '../Components/Common/Header'
import ContactInfo from '../Components/Contactus/ContactInfo'
import { useTranslations } from 'next-intl';
import ContactForm from '../Components/Service/ContactForm';

export default function service() {
    const t = useTranslations("general");
console.log(t('services'));
    return (
        <div>
            <Header title={t('services')} />
            <ContactForm />
            <ContactInfo />
        </div>
    )
}

// export default service

export async function getStaticProps({ locale }) {
    return {
      props: {
        messages: require("../locales/" + locale + ".json"),
      },
    };
  }
