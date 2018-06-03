import React, { Component } from "react";
import LoginImg from "../../img/QfbLogin.png";
import { AuthService } from "../../Services";

class Login extends Component {
  componentWillMount() {
    AuthService.login().then(result => {
      const { from } = this.props.location.state || {
        from: { pathname: "/admin/posts" }
      };
      AuthService.isAdmin().then(() => this.props.history.push(from));
    });
  }

  render() {
    return (
      <div>
        <div style={container}>
          <div style={{ textAlign: "center" }} />
        </div>
      </div>
    );
  }
}

const container = {
  background: 'url("' + LoginImg + '") no-repeat center fixed',
  backgroundColor: "black",
  backgroundSize: "contain",
  minHeight: "100%",
  minWidth: "100%",
  width: "100%",

  position: "fixed",
  top: 0,
  left: 0,

  display: "flex",
  height: "500px"
};

export { Login };
