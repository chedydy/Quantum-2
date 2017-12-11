import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Contact,
  About,
  Home,
  PublicNavigator,
  PostsPreview,
  Footer,
  Post
} from "../Components/Public";
import NotFoundPage from "../Components/NotFound";

const PublicLayout = () => {
  return (
    <div>
      <PublicNavigator />
      <Switch>
        <Route path="/about" component={About} exact={true} />
        <Route path="/posts/:id" component={Post} exact={true} />
        <Route path="/posts" component={PostsPreview} exact={true} />
        <Route path="/contact" component={Contact} exact={true} />
        <Route path="/" component={Home} exact={true} />
        <Route component={NotFoundPage} exact={true} />
      </Switch>
      <Footer />
    </div>
  );
};

export { PublicLayout };
