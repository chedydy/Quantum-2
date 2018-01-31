import React from "react";
import { FooterShareLink } from "../Common";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer-panel">
      <div style={{ flex: 1 }}/>
        <ul className="list-inline text-center" style={{ flex: 2 }}>
          <FooterShareLink provider="facebook" link="https://www.facebook.com/quantumcivilization/?ref=page_internal"/>
          <FooterShareLink provider="instagram" link=""/>
        </ul>
      
      <span style={{ flex: 1, fontSize: "15px" }}>Created by Quantum Civilisation © 2018</span>
    </footer>
  );
};

export { Footer };
