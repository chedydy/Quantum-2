import React, { Component } from "react";
import {FacebookLoginButton} from 'react-social-login-buttons';
import LoginImg from "../../img/QfbLogin.png";
import { provider, auth } from "../../firebase/firebase";
import Media from "react-media";

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
          <div style={{'textAlign': 'center'}}>
            <Media query="(max-width: 500px)">
              {matches =>
                matches ? (
                  <FacebookLoginButton style={smallBtn} text="Login" onClick={this.facebookLogin.bind(this)} />
                ) : (
                  <FacebookLoginButton style={bigBtn} text="Facebook Login" onClick={this.facebookLogin.bind(this)} />
                )
              }
            </Media>  
          </div>            
        </div>  
      </div>
    );
  }
}

const bigBtn = {
  boxShadow: 'none',
  position: 'absolute',
  margin: '20px auto',
  right: '45%'
}

const smallBtn = {
  boxShadow: 'none',
  position: 'absolute',
  margin: '20px auto',
  right: '30%'
}

const container = {
  background: 'url("'+LoginImg+'") no-repeat center fixed',
  backgroundColor: 'black',
  backgroundSize: 'contain',
  /* Set rules to fill background */
  minHeight: '100%',
  minWidth: '100%',
  /* Set up proportionate scaling */
  width: '100%',
	
  /* Set up positioning */
  position: 'fixed',
  top: 0,
  left: 0,

  display: 'flex',
  // flexDirection: 'column',
  height: '500px',
};

export { Login };
