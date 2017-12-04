import React, { Component } from "react";
import { provider, auth } from "../firebase/firebase";

class Login extends Component {
  facebookLogin = () => {
    auth()
      .signInWithPopup(provider)
      .then(result => {
        const { from } = this.props.location.state || { from: { pathname: '/admin/posts/new' } }
        this.props.history.push(from);
      })
      .catch(console.log);
  };
  render() {
    return (
      <div>
        <button onClick={this.facebookLogin.bind(this)}>Login</button>
      </div>
    );
  }
}

export { Login };
