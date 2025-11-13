import React, { useState, useEffect } from "react";
import "./styles/Navbar.css";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scroll ? "navbar-scroll" : ""}`}>
      <div className="container nav-inner">
        <h2 className="logo">HopeForAll</h2>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#causes">Causes</a>
          <a href="#donate">Donate</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#donate" className="btn">Donate</a>
      </div>
    </header>
  );
}
