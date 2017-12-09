import React, { Component } from "react";
import {PostDetails} from "./PostDetails";

class NewPost extends Component {
  componentWillMount() {}

  render() {
    return (
      <div>
        <PostDetails />
      </div>
    );
  }
}
export {NewPost};
