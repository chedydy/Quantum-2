import Footer from "../Components/Footer";
import Navigator from "../Components/Navigator";

import { Route, Switch } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Post from "../Components/Post";
import Contact from "../Components/Contact";
import NotFoundPage from "../Components/NotFound";
import PostsPreview from "../Components/PostsPreview";

import React, { Component } from "react";
class PublicLayout extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <Navigator />
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
  }
}

export default PublicLayout;
