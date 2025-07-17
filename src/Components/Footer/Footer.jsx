import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img
            style={{
              width: "120px",
              height: "120px",
              border: "2px solid #b8b7b7",
              padding: "4px",
            }}
            src={assets.logo}
            alt=""
          />
          <p>
            Connecting you with top local restaurants and a variety of cuisines,
            we make food ordering fast, easy, and reliable—anytime, anywhere.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delevery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-093-436-5674</li>
            <li>berrybluefooddelivery@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Bringing your favorite meals to your door — fast, fresh, and
        hassle-free.Copyright © 2025 Berry Blue.com - All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
