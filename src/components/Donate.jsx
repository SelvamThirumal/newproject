import React from "react";
import "./styles/Donate.css";

export default function Donate() {
  return (
    <section id="donate" className="section donate">
      <div className="container donate-wrap card">
        <div>
          <h2>Donate Now</h2>
          <p>Your small help can make a big difference.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for your donation!");
            }}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="number" placeholder="Amount (₹)" required />
            <button className="btn" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
