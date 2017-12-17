import React, { Component } from "react";
import AuthService from "../../Services/AuthService";
import { withRouter } from 'react-router-dom';
class Logout extends Component {
    componentDidMount() {
        AuthService.logout().then((result) => {
            this.props.history.push('/');
        })
    }

    render() {
        return (
            <p>Logging you out...</p>
        );
    }
}

export default (withRouter(Logout));