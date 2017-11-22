import React, { Component } from "react";
import {app, facebookAuthProvider} from '../firebase/firebase';

class Login extends Component {
    facebookLogin = () => {
        console.log(app.auth().signInWithPopup(facebookAuthProvider));
    }
    render(){
        return(
            <div>
                <button onClick={this.facebookLogin}>Login</button>
            </div>
        );
    }
}

export default Login;

