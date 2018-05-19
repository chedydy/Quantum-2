import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import {
  AdminNavigator,
  About,
  Posts,
  NewPost,
  EditPost,
  ContactRequests,
  Categories,
  EditCategory,
  NewCategory,
  Authors,
  NewAuthor,
  EditAuthor
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
          path="/admin/contactrequests/"
          component={ContactRequests}
          exact={true}
        />
        <PrivateRoute
          path="/admin/categories/"
          component={Categories}
          exact={true}
        />
        <PrivateRoute
          path="/admin/categories/new"
          component={NewCategory}
          exact={true}
        />
        <PrivateRoute
          path="/admin/categories/edit/:category"
          component={EditCategory}
          exact={true}
        />
        <PrivateRoute path="/admin/authors" component={Authors} exact={true} />
        <PrivateRoute
          path="/admin/authors/new"
          component={NewAuthor}
          exact={true}
        />
        <PrivateRoute
          path="/admin/authors/edit/:id"
          component={EditAuthor}
          exact={true}
        />
      </Switch>
    </div>
  );
};
export { AdminLayout };
