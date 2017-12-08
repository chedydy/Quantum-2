import React, { Component } from "react";
import { provider, auth } from "../firebase/firebase";
import {FacebookLoginButton} from 'react-social-login-buttons';
import LoginImg from "../img/QfbLogin.png";

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
        <div style={container}>
            <div style={centerButton}>
              <FacebookLoginButton text="Login with Facebook" onClick={this.facebookLogin.bind(this)} />
            </div>
        </div>  
      </div>
    );
  }
}

const centerButton = {
  width: 'auto',
  textAlign: 'left',
  marginBottom: 'auto',
  marginTop: '20px',
  marginRight: 'auto',
  marginLeft: 'auto',
};

const container = {
  background: 'url("'+LoginImg+'") no-repeat center fixed',
  backgroundColor: 'black',
  backgroundSize: 'contain',
  /* Set rules to fill background */
  minHeight: '100%',
  minWidth: '1024px',
  /* Set up proportionate scaling */
  width: '100%',
  height: 'auto',
	
  /* Set up positioning */
  position: 'fixed',
  top: 0,
  left: 0,

  display: 'flex',
  flexDirection: 'column',
  height: '500px'
};

export { Login };
