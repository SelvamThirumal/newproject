import React from "react";
import "./styles/Causes.css";

const causes = [
  { icon: "📚", title: "Education", desc: "Books & learning support." },
  { icon: "🩺", title: "Healthcare", desc: "Health camps for kids." },
  { icon: "🥗", title: "Nutrition", desc: "Meals for malnourished children." },
];

export default function Causes() {
  return (
    <section id="causes" className="section causes">
      <div className="container">
        <h2>Our Causes</h2>
        <div className="cause-grid">
          {causes.map((c, i) => (
            <div key={i} className="cause card">
              <div className="icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
