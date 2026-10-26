import React from "react";
import "../Styles/Footer.css";
/* import SubscribeNewsletter from "./SubscribeNewsletter"; */
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              Madicate
            </p>
            <p className="ft-description">
              Talk to online doctors and get medical advice, online
              prescriptions, refills and medical notes within minutes. On-demand
              healthcare services at your fingertips.
            </p>
          </div>

  {/*         <SubscribeNewsletter /> */}
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>
              <a href="#services">Emergency Care</a>
            </li>
            <li>
              <a href="#services">Heart Disease</a>
            </li>
            <li>
              <a href="#services">Dental Care</a>
            </li>
            <li>
              <a href="#services">Prescription</a>
            </li>
            <li>
              <a href="#services">Insights for doctors</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link to={""}>General Info</Link>
            </li>
            <li>
              <Link to={""}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={""}>Terms of Services</Link>
            </li>
            <li>
              <Link to={""}>Consultations</Link>
            </li>
            <li>
              <Link to={""}>How it Works</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <button >support@medicate.com</button>
            </li>
            <li>
              <button >
                appointment@medicate.com
              </button>
            </li>
            <li>
              <button >+022 5454 5252</button>
            </li>
            <li>
              <button>+022 2326 6232</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
