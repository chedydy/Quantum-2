import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "../Components/Admin";
import PrivateRoute from "./PrivateRoute";
import { AdminLayout } from "./AdminLayout";

// import Login from "../Components/Login";

class LoginLayout extends Component {
  componentWillMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/admin/login/" component={Login} exact={true} />
          <PrivateRoute path="/admin/" component={AdminLayout} />
        </Switch>
      </div>
    );
  }
}

export default LoginLayout;