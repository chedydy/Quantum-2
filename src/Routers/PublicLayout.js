import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Contact,
  About,
  Home,
  PublicNavigator,
  PostsPreview,
  Footer,
  Post,
  Posts
} from "../Components/Public";
import NotFoundPage from "../Components/NotFound";

const PublicLayout = () => {
  return (
    <div>
      <PublicNavigator />
      <div style={{minHeight:"82vh"}}>
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
