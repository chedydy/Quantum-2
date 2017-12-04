import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { Login, PostDetails } from "../Components";
import auth from "../Services/AuthService";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
        auth.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/admin/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
