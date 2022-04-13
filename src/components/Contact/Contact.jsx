import { MdOutlineAlternateEmail } from 'react-icons/md';

import SectionHeader from '../SectionHeader/SectionHeader';

import img from '../../assets/contact.svg';

import './Contact.css';

import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const formRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('sent');

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);

          formRef.current.user_subject.value = '';
          formRef.current.user_email.value = '';
          formRef.current.message.value = '';
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSent(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [sent]);

  return (
    <section className='contact section-padding  bg-color-1' id='contact'>
      <SectionHeader title='Contact'>
        <MdOutlineAlternateEmail />
      </SectionHeader>
      <div className='contact-content'>
        <div className='contact-form'>
          {sent && (
            <div className='alert'>
              <h3>Message sent!</h3>
            </div>
          )}
          <form ref={formRef} onSubmit={submitHandler}>
            <input type='text' required placeholder='Subject' name='user_subject' />
            <input type='text' required placeholder='Your Email' name='user_email' />
            <textarea required placeholder='Your Message' name='message'></textarea>
            <button type='submit' className='btn'>
              Send
            </button>
          </form>
        </div>
        <div className='contact-img'>
          <img src={img} alt='contact_image' />
        </div>
      </div>
    </section>
  );
};

export default Contact;
