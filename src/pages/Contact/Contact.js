// ContactForm.js
import React from 'react';
import './ContactForm.css';

const ContactForm = () => (
  
  <form className="contact-form">
    <div className="row">
      <input type="text" placeholder="First Name" required />
      <input type="text" placeholder="Middle Name (Optional)" />
      <input type="text" placeholder="Last Name" required />
    </div>
    <div className="row">
      <input type="email" className="large-input" placeholder="Email Address" required />
      <input type="text" className="large-input" placeholder="Contact" required />
    </div>
    <div className="row full-width">
      <input type="text" className="full-width-input" placeholder="Subject" required />
    </div>
    <div className="row full-width">
      <textarea className="full-width-input" placeholder="Message" required></textarea>
    </div>
    <button type="submit">Send Message</button>
  </form>
);

export default ContactForm;
