import React, { Component } from "react";
import { PostPreviewService, PostService } from "../../../Services";
import { PostContent } from "./PostContent";

class Post extends Component {
  state = {
    post: {
      content: "",
      id: "",
      imageUrl: ""
    },
    preview: {
      id: "",
      title: "",
      subTitle: "",
      author: "",
      publishDate: "",
      authorLink: "",
      imageLink: ""
    }
  };
  componentWillMount() {
    var id = this.props.match.params.id;
    Promise.all([
      PostPreviewService.getPreview(id),
      PostService.getPost(id)
    ]).then(values => {
      this.setState({ preview: values[0], post: values[1] });
    });
  }

  render() {
    return <PostContent preview={this.state.preview} post={this.state.post} />;
  }
}

export { Post };
