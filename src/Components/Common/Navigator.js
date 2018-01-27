import React, {Component} from "react";
import {Link} from "react-router-dom";
import logo from "../../img/quantumcivilisation.png";
import './Navigator.css';

class Navigator extends Component {
  componentWillMount() {
    this.setState({menuDisplay: "none", showMenu: false});
  }
  showMenu() {
    this.setState({
      menuDisplay: !this.state.showMenu
        ? "block"
        : "none",
      showMenu: !this.state.showMenu
    });
  }
  render() {
    const imgStyle = {
      width: "250px",
      height: "100px",
      cursor: "pointer"
    };
    return (
      <div>
        <nav className="navbar navbar-expand-xl navbar-light background" id="mainNav">
          <div className="container-fluid background__color">
            <Link to="/">
              <img src={logo} className="navbar-brand" alt="logo" style={imgStyle}/>
            </Link>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              onClick={this
              .showMenu
              .bind(this)}>
              <i className="fa fa-bars"/>
            </button>
            <div
              className={`collapse navbar-collapse ${this.state.navButtonsClass}`}
              id="navbarResponsive">
              <ul className="navbar-nav ml-auto">{this
                  .props
                  .children
                  .map((child, index) => {
                    return (
                      <li className="nav-item" key={index}>
                        {child}
                      </li>
                    )
                  })}</ul>
            </div>
          </div>
        </nav>
        <div className="side-menu-filler"/>
        <div
          className="side-menu"
          style={{
          display: this.state.menuDisplay
        }}>
          <ul className="side-menu-list">{this
              .props
              .children
              .map((child, index) => {
                return (
                  <li className="side-menu-list-item" key={index}>
                    {child}
                  </li>
                )
              })}</ul>
        </div>
      </div>
    );
  }
}

export {Navigator};
