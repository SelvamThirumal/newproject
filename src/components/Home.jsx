import React from "react";
import "./styles/Home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-text">
          <h1>
            Together We Can <span>Change Lives</span>
          </h1>
        
          <p>
            Join us in creating brighter futures for underprivileged children.
            Every small step makes a big difference.
          </p>
          <button>Get Involved</button>
        </div>

        <div className="hero-img"></div>
      </div>
    </section>
  );
}
