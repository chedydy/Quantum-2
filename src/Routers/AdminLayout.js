import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";

import NotFoundPage from "../Components/NotFound";
import PostDetails from "../Components/PostDetails";
import Login from "../Components/Login";

class AdminLayout extends Component {
  constructor(props) {
    super(props);
  }
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
