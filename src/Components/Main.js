import React, { Component } from "react";
import Home from "./Home";
import Post from "./Post";
import Login from "./Login";

class Main extends Component {
  componentWillMount() {}

  render() {
    return (
      <div>
        <Home />
        <Post />
        <Login />
      </div>
    );
  }
}

export default Main;
