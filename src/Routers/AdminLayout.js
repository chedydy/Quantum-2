import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { AdminNavigator, NewPost, About, EditAbout,Posts } from "../Components/Admin";

const AdminLayout = () => {
  return (
    <div>
      <AdminNavigator />
      <Switch>
        <PrivateRoute path="/admin/" component={NewPost} exact={true} />
        <PrivateRoute path="/admin/posts/" component={Posts} exact={true} />
        <PrivateRoute path="/admin/about/" component={About} exact={true} />
        <PrivateRoute
          path="/admin/about/edit/"
          component={EditAbout}
          exact={true}
        />
      </Switch>
    </div>
  );
};
export { AdminLayout };
