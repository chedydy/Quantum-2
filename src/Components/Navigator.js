import React, { Component } from "react";
import logo from "../img/quantumcivilisation.png";
import LinkItem from "./LinkItem";
class Navigator extends Component {
  constructor(props){
super(props);
  }
  componentWillMount() {
    this.setState({
      navButtonsClass: "",
      showMenu: false
    });
  }
  showMenu() {
    this.setState({
      navButtonsClass: !this.state.showMenu ? "show" : "",
      showMenu: !this.state.showMenu
    });
  }
  render() {
    const imgStyle = { width: "250px", height: "100px" };
    return (
      <nav
        className="navbar navbar-expand-xl navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container-fluid ">
          <img
            src={logo}
            className="navbar-brand"
            alt="logo"
            style={imgStyle}
          />
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            onClick={this.showMenu.bind(this)}
          >
            Menu
            <i className="fa fa-bars" />
          </button>
          <div
            className={`collapse navbar-collapse ${this.state.navButtonsClass}`}
            id="navbarResponsive"
          >
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
