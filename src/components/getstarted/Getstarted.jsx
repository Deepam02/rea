import React from "react";
import "./Getstarted.css";

const Getstarted = () => {
  return (
    <section id="get" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started With Us</span>
          <span className="secondaryText">
            Lorem, ipsum dolor sit amet consectetur 
            <br /> veritatis perspiciatis sunt 
          </span>
          <button className="button">
            <a href="mailto:deepamthegreat2@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Getstarted;
