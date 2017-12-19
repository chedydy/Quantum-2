import React from "react";
import { FooterShareLink, Container } from "../Common";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <ul className="list-inline text-center">
              <FooterShareLink provider="twitter" />
              <FooterShareLink provider="facebook" />
              <FooterShareLink provider="github" />
            </ul>
            <p className="copyright text-muted">
              Copyright &copy; Your Website 2017
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
