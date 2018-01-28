import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/quantumcivilisation - home.png";
import "./Navigator.css";

class Navigator extends Component {
  componentWillMount() {
    this.setState({ menuDisplay: "none" });
  }
  showMenu(openSideMenu) {
    this.setState({
      menuDisplay: openSideMenu ? "block" : "none"
    });
  }
  render() {
    const imgStyle = {
      width: "13vw",
      height: "9vh",
      cursor: "pointer"
    };
    return (
      <div>
        <nav
          className="navbar navbar-expand-xl navbar-light background"
          id="mainNav"
        >
          <div className="container-fluid background__color">
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
              onClick={this.showMenu.bind(this, true)}
            >
              <i className="fa fa-bars" />
            </button>
            <div
              className={`collapse navbar-collapse ${
                this.state.navButtonsClass
              } navbar-height`}
              id="navbarResponsive"
            >
              <ul className="navbar-nav ml-auto">
                {this.props.children.map((child, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      {child}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
        <div
          className="side-menu-filler"
          style={{
            display: this.state.menuDisplay
          }}
          onClick={this.showMenu.bind(this, false)}
        />
        <div
          className="side-menu"
          style={{
            display: this.state.menuDisplay
          }}
        >
          <ul className="side-menu-list">
            {this.props.children.map((child, index) => {
              return (
                <li className="side-menu-list-item" key={index}>
                  {child}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export { Navigator };
