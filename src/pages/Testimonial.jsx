import React from 'react';
import './Testimonial.scss';
import { FaShieldAlt } from 'react-icons/fa';

const Testimonial = () => {
  return (
    <section className="testimonial">
      <h3 className="testimonial__name">Kaleb Lechtenberg</h3>
      <p className="testimonial__quote">
        "Working with this freelancer has been great. His attention to detail is
        unparalleled and finished all work ahead of schedule. Will gladly send
        more work and I do not hesitate to recommend him to you on your project also."
      </p>
      <div className="testimonial__icon">
        <FaShieldAlt size={40} />
      </div>
    </section>
  );
};

export default Testimonial;
