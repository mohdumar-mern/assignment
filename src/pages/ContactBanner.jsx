import React from 'react';
import './ContactBanner.scss';

const ContactBanner = () => {
  return (
    <section className="contact-banner">
      <div className="contact-banner__content">
        <img
          src="images/heroImage.jpg"
          alt="Thank you"
          className="contact-banner__image"
          loading="lazy"
        />
        <p className="contact-banner__text">
          Thanks for visiting my website.
          If you have any questions, you can write to me on any of my social networks. I am sure I will answer you.
        </p>
      </div>
    </section>
  );
};

export default ContactBanner;
