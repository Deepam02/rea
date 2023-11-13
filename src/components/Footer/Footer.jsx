import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings flexCenter innerWidth f-container">
        <div className="flexColStart f-left">
          <img src="logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">1234 abc noida, up</span>
          <div className="flexCenter f-menu">
            <span>Properties</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
