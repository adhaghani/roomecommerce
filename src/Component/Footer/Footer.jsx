import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div id="Footer" className="Footer">
      <div className="Footer-Container">
        <div className="footer-section">
          <h5 className="title">Customer Service</h5>
          <ul>
            <li>
              <a href="">Help Centre</a>
            </li>
            <li>
              <a href="">How to Use</a>
            </li>
            <li>
              <a href="">RoomPay</a>
            </li>
            <li>
              <a href="">Outlet</a>
            </li>
            <li>
              <a href="">Scam Safety Tips</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h5 className="title">Follow Us @</h5>
          <ul>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Github</a>
            </li>
            <li>
              <a href="">Linkedin</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h5 className="title">About Room</h5>
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Room Careers</a>
            </li>
            <li>
              <a href="">Room Policies</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h5 className="title">Contact Us</h5>
          <ul>
            <li>
              <a href="">Email</a>
            </li>
            <li>
              <a href="">Customer Service</a>
            </li>
            <li>
              <a href="">Headquaters</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="Copyright">
        <p>Copyright by @Adhaghani, All rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
