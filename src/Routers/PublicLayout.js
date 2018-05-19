import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Contact,
  About,
  Home,
  PublicNavigator,
  Footer,
  Post,
  Posts
} from "../Components/Public";
import NotFoundPage from "../Components/NotFound";
import "./Layout.css";

const PublicLayout = () => {
  return (
    <div className="layout">
      <PublicNavigator />
      <div style={{ flex: "8" }}>
        <Switch>
          <Route path="/about" component={About} exact={true} />
          <Route path="/posts/:id" component={Post} exact={true} />
          <Route path="/posts" component={Posts} exact={true} />
          <Route path="/contact" component={Contact} exact={true} />
          <Route path="/" component={Home} exact={true} />
          <Route component={NotFoundPage} exact={true} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export { PublicLayout };
