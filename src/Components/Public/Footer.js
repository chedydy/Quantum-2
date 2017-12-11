import React, { Component } from "react";
import { FooterShareLink, Container } from "../Common";
const Footer = () => {
  return (
    <footer>
      <Container>
        <ul className="list-inline text-center">
          <FooterShareLink provider="twitter" />
          <FooterShareLink provider="facebook" />
          <FooterShareLink provider="github" />
        </ul>
        <p className="copyright text-muted">
          Copyright &copy; Your Website 2017
        </p>
      </Container>
    </footer>
  );
};

export { Footer };
