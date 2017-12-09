import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { AdminNavigator, NewPost } from "../Components/Admin";

// import Login from "../Components/Login";

class AdminLayout extends Component {
  componentWillMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <AdminNavigator />
        <Switch>
          <PrivateRoute path="/admin/" component={NewPost} exact={true} />
        </Switch>
      </div>
    );
  }
}

export default AdminLayout;
