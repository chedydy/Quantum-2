import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { PublicLayout } from "./PublicLayout";
import LoginLayout from "./LoginLayout";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/admin" component={LoginLayout} />
        <Route path="/" component={PublicLayout} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
