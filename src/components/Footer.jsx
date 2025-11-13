import React from "react";
import "./styles/Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="socials">
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaLinkedin /></a>
      </div>
      <p>© {new Date().getFullYear()} HopeForAll. All Rights Reserved.</p>
    </footer>
  );
}
