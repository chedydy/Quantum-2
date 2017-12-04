import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PublicLayout from "./PublicLayout";
import AdminLayout from "./AdminLayout";

import Home from "../Components/Home";
import About from "../Components/About";
import Post from "../Components/Post";
import Contact from "../Components/Contact";
import NotFoundPage from "../Components/NotFound";
import Main from "../Components/Main";
import PostsPreview from "../Components/PostsPreview";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/admin" component={AdminLayout} />
        <Route path="/" component={PublicLayout} />
      </Switch>
      {/* <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/posts" component={PostsPreview} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFoundPage} />
      </Switch> */}
    </div>
  </BrowserRouter>
);

export default AppRouter;
