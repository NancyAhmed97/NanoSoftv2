import React, { useState } from 'react'
import styles from "../Contactus/Contactus.module.css";
import { Container } from 'react-bootstrap';
import { useTranslations } from "next-intl";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

function ContactForm() {
    const t = useTranslations("general");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const sendEmail = (e) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);
        emailjs.sendForm('anancyahmed97@icloud/com', 'dailiaahmed706@gmail.com', '#myForm').then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );
        
        // Clears the form after sending the email
        e.target.reset();
      };
    

  return (
    <div className={styles.ContactInfo}>
      <Container fluid>
      <p>{t('contact')}</p>
      <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" disabled={isSubmitting} />
      {stateMessage && <p>{stateMessage}</p>}
    </form>

      </Container>
    </div>
  )
}

export default ContactForm
