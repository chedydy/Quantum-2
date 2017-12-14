import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/quantumcivilisation.png";
class Navigator extends Component {
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
    const imgStyle = { width: "250px", height: "100px", cursor: "pointer" };
    return (
      <nav
        className="navbar navbar-expand-xl navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container-fluid ">
          <Link to="/">
            <img
              src={logo}
              className="navbar-brand"
              alt="logo"
              style={imgStyle}
            />
          </Link>
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
            <ul className="navbar-nav ml-auto">{this.props.children}</ul>
          </div>
        </div>
      </nav>
    );
  }
}

export { Navigator };
