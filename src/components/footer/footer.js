import React from "react";
import "./footer.css";
import FooterLogo from "../../assets/Desi-in-UAE-Logo.png";
// import FooterImg from '../../assets/footer-img.png'
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";

function footer() {
  return (
    <div className="Footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="footer-logo-img">
            <img src={FooterLogo} alt="" />
          </div>

          <div className="footer-logo-content">
            <p>
              Join us in this exciting journey as we come together as one strong
              and vibrant community.
            </p>
          </div>
        </div>
        <div className="footer-content-links">
          <div className="footer-links">
            <h4 style={{ color: "#94A3B8" }}>Links</h4>
            <Link to="/">
              <h4>Home</h4>
            </Link>
            <Link to="/about">
              <h4>About Us</h4>
            </Link>
          </div>

          <div className="footer-contact">
            <h4 style={{ color: "#94A3B8" }}>Contact</h4>
            <a href="tel:+971507691725">
              <h4>Phone: +971507691725</h4>
            </a>
            <a href="mailto:connect@desiinuae.com">
              <h4>Mail: connect@desiinuae.com</h4>
            </a>

            <a
              href="https://instagram.com/desiinuae?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram color="#d6249f" className="footer-icon" />
            </a>

            <a
              href="https://www.facebook.com/desiinuae"
              target="_blank"
              rel="noreferrer"
            >
              <FiFacebook color="#3b5998" className="footer-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copy-right">
        <p>@Copyright 2022, All Rights</p>
      </div>
    </div>
  );
}

export default footer;
