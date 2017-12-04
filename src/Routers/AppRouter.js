import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PublicLayout from "./PublicLayout";
import AdminLayout from "./AdminLayout";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/admin" component={AdminLayout} />
        <Route path="/" component={PublicLayout} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
