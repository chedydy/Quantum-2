import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import {
  AdminNavigator,
  About,
  EditAbout,
  Posts,
  NewPost,
  EditPost,
  ContactRequests
} from "../Components/Admin";

const AdminLayout = () => {
  return (
    <div id="AdminLayout">
      <AdminNavigator />
      <Switch>
        <PrivateRoute path="/admin/" component={Posts} exact={true} />
        <PrivateRoute path="/admin/posts/" component={Posts} exact={true} />
        <PrivateRoute
          path="/admin/posts/new"
          component={NewPost}
          exact={true}
        />
        <PrivateRoute
          path="/admin/posts/edit/:id"
          component={EditPost}
          exact={true}
        />
        <PrivateRoute path="/admin/about/" component={About} exact={true} />
        <PrivateRoute
          path="/admin/about/edit/"
          component={EditAbout}
          exact={true}
        />
        <PrivateRoute
          path="/admin/contactrequests/"
          component={ContactRequests}
          exact={true}
        />
      </Switch>
    </div>
  );
};
export { AdminLayout };
