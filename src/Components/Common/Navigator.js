import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import logo from "../../img/quantumcivilisation - home.png";
import "./Navigator.css";

class NavigatorComponent extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  componentWillMount() {
    this.setState({
      currentPath: this.props.location.pathname
    });
  }
  componentWillReceiveProps(props) {
    this.setState({ currentPath: props.location.pathname });
  }
  render() {
    return (
      <div className="navigatorClass">
        <Navbar color="faded" light>
          <Link className="mr-auto logo-button" to="/">
            <img src={logo} className="navbar-brand logo-style" alt="logo" />
          </Link>
          <div className="navigatorClass-desktop">
            {this.props.children.map((child, index) => {
              return <NavItem key={index}>{child}</NavItem>;
            })}
          </div>
          <NavbarToggler
            onClick={this.toggleNavbar}
            className="mr-2 navigatorClass-mobile"
          />
          <div className="navigatorClass-mobile navigatorClass-mobile-list">
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav className="ml-auto" navbar>
                {this.props.children.map((child, index) => {
                  return <NavItem key={index}>{child}</NavItem>;
                })}
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
const Navigator = withRouter(NavigatorComponent);
export { Navigator };
