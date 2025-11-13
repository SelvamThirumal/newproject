import React from "react";
import "./styles/About.css";

export default function About() {
  return (
    <section className="about">
      <h2>About Our Mission</h2>
      <div className="about-grid">
        <div className="card">
          <h3>Empowering Children</h3>
          <p>
            We work to provide education and resources for children in need,
            helping them build a better future.
          </p>
        </div>

        <div className="card">
          <h3>Community Growth</h3>
          <p>
            Our programs focus on improving local communities through
            sustainable development and awareness.
          </p>
        </div>

        <div className="card">
          <h3>Health & Nutrition</h3>
          <p>
            We ensure children have access to proper healthcare and nutrition
            for a healthy start in life.
          </p>
        </div>

        <div className="card">
          <h3>Support & Awareness</h3>
          <p>
            Creating awareness and support networks to uplift underprivileged
            families across regions.
          </p>
        </div>
      </div>
    </section>
  );
}
