import React, { Component } from "react";
import logo from "../logo.svg";
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
              <LinkItem text="Home" link="index.html" />
              <LinkItem text="About" link="about.html" />
              <LinkItem text="Sample Post" link="post.html" />
              <LinkItem text="Contact" link="contact.html" />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigator;
