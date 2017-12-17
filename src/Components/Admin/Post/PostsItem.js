import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "../../Common";
import { PostContent } from "../../Public";
import PostService from "../../../Services/PostsService";
class PostsItem extends Component {
  state = {
    post: {
      content: ""
    }
  };
  loadPostDetails() {
    PostService.getPost(this.props.postPreview.id)
      .then(post => this.setState({ post }))
      .catch(console.log);
  }
  render() {
    const { postPreview } = this.props;
    return (
      <div className="row justify-content-center">
        <div className="col-6 text-left align-self-center">
          {postPreview.title}
        </div>
        <div className="col-2 text-left align-self-center">
          {postPreview.author}
        </div>
        <div className="col-2 text-left align-self-center">
          {postPreview.publishDate}
        </div>
        <div className="col-1 align-self-center">
          <Modal
            buttonText="Preview"
            title="Preview Post"
            appElement="#root"
            afterOpen={this.loadPostDetails.bind(this)}
          >
            <PostContent post={this.state.post} preview={postPreview} />
          </Modal>
        </div>
      </div>
    );
  }
}

export { PostsItem };
