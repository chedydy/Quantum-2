import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import PostDetails from "../Components/PostDetails";
import Login from "../Components/Login";

class AdminLayout extends Component {
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/admin" component={Login} exact={true} />
          <Route path="/admin/login" component={Login} exact={true}/>
          <Route path="/admin/posts/new" component={PostDetails} exact={true} />
        </Switch>
      </div>
    );
  }
}

export default AdminLayout;
