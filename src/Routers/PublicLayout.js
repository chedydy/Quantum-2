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
  }
}

export default PublicLayout;
