import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthService } from "../Services";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      AuthService.isAuthenticated() ? (
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
