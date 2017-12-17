import React, { Component } from "react";
import PostsService from "../../Services/PostsService";
import PostsPreviewService from "../../Services/PostsPreviewService";
import { PostContent } from "./PostContent";

class Post extends Component {
  state = {
    post: {
      content: ""
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
      PostsPreviewService.getPreview(id),
      PostsService.getPost(id)
    ]).then(values => {
      this.setState({ preview: values[0], post: values[1] });
    });
  }

  render() {
    return <PostContent preview={this.state.preview} post={this.state.post} />;
  }
}

export { Post };
