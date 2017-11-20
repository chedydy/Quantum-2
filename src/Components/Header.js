import React, { Component } from "react";
import logo from "../logo.svg";

class Header extends Component {
  componentWillMount() {}

  render() {
    const imgStyle = { width: "500px", height: "200px" };
    // const navClasses = {
    //   "navbar": true,
    //   "navbar-expand-lg": true,
    //   "navbar-light": true,
    //   "fixed-top": true
    // };
    // const buttonClasses = {
    //   "navbar-toggler": true,
    //   "navbar-toggler-right": true
    // };
    // const buttonTextClasses = {
    //   "fa": true,
    //   "fa-bars": true
    // };
    // const navButtonsContainerClasses={
    //   "collapse": true,
    //   "navbar-collapse":true
    // }
    // const listClasses={
    //   "navbar-nav": true,
    //   "ml-auto":true
    // }
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
            aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="post.html">
                  Sample Post
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
