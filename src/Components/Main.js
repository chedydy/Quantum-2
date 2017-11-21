import React, { Component } from "react";
import Post from "./Post";
import Login from "./Login";

class Main extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <div>
        <Post />
        <Login />
      </div>
    );
  }
}

export default Main;