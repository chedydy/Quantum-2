import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

import Home from "../Components/Home";
import About from "../Components/About";
import Post from "../Components/Post";
import Contact from "../Components/Contact";
import NotFoundPage from "../Components/NotFound";
import Navigator from "../Components/Navigator";
import Footer from "../Components/Footer";
import Main from "../Components/Main";
import PostsPreview from "../Components/PostsPreview";
import PostDetails from "../Components/PostDetails";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Navigator />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/posts/new" component={PostDetails} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/posts" component={PostsPreview} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
