import React from "react";
import "./styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>
        We’d love to hear from you! Whether it’s a question, suggestion, or a
        way to get involved — reach out and let’s make a difference together.
      </p>

      <div className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea rows="4" placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </div>
    </section>
  );
}
