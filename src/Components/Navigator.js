import React, { Component } from "react";
import logo from "../img/quantumcivilisation.png";
import LinkItem from "./LinkItem";
class Navigator extends Component {
  componentWillMount() {}

  render() {
    const imgStyle = { width: "500px", height: "200px" };
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          <img
            src={logo}
            className="navbar-brand"
            alt="logo"
            style={imgStyle}
          />
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <LinkItem text="Home" link="/" />
              <LinkItem text="About" link="about" />
              <LinkItem text="Posts" link="posts" />
              <LinkItem text="Contact" link="contact" />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigator;
