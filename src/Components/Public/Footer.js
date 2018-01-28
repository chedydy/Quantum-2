import React from "react";
import { FooterShareLink } from "../Common";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer-panel">
      <ul className="list-inline text-center">
        <FooterShareLink provider="facebook" />
        <FooterShareLink provider="instagram" />
      </ul>
    </footer>
  );
};

export { Footer };
