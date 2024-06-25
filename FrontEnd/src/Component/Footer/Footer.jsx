import React from "react";

import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="Footer" className="Footer">
      <div className="Footer-Container">
        <div className="footer-section">
          <h5 className="title">Customer Service</h5>
          <ul>
            <li>
              <Link to={"/Development"}>Help Centre</Link>
            </li>
            <li>
              <Link to={"/Development"}>How to Use</Link>
            </li>
            <li>
              <Link to={"/Development"}>RoomPay</Link>
            </li>
            <li>
              <Link to={"/outlet"}>Outlet</Link>
            </li>
            <li>
              <Link to={"/Development"}>Scam Safety Tips</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h5 className="title">About Room</h5>
          <ul>
            <li>
              <Link to={"/#About"}>About Us</Link>
            </li>
            <li>
              <Link to={"/Development"}>Room Career</Link>
            </li>
            <li>
              <Link to={"/Development"}>Room Policies</Link>
            </li>
            <li>
              <Link to={"/Development"}>Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h5 className="title">Contact Us</h5>
          <ul>
            <li>
              <Link to={"/Development"}>Email</Link>
            </li>
            <li>
              <Link to={"/Development"}>Customer Service</Link>
            </li>
            <li>
              <Link to={"/Development"}>Headquaters</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="Copyright">
        <p>Copyright by @Room, All rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
