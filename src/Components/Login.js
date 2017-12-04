import React, { Component } from "react";
import { provider, auth } from "../firebase/firebase";

class Login extends Component {
  facebookLogin = () => {
    auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log(result.user);
        this.setState({ user: result.user });
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

export {Login};
