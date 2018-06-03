import React from "react";
import { FooterShareLink } from "../Common";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer-panel">
      <div className="footer-panel-fill" />
      <ul
        className="footer-panel-links list-inline text-center"
        style={{ flex: 2 }}
      >
        <FooterShareLink
          provider="facebook"
          link="https://www.facebook.com/quantumcivilization/?ref=page_internal"
        />
        <FooterShareLink
          provider="instagram"
          link="https://www.instagram.com/quantumcivilization/"
        />
      </ul>
      <span className="footer-text">
        Created by Quantum Civilisation © 2018
      </span>
    </footer>
  );
};

export { Footer };
