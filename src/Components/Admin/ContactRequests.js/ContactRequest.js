import React, { Component } from "react";
import { Modal, LinkButton, Button } from "../../Common";
import { PostContent } from "../../Public";
import {
  PostService,
  PostPreviewService,
  CategoriesService
} from "../../../Services";
import "./PostItem.css";

class ContactRequest extends Component {
  state = {
    post: {
      content: ""
    }
  };

  render() {
    const { postPreview } = this.props;
    return (
      <div className="row justify-content-center">
        <div className="col-4 text-left align-self-center">
        <div className="col-2 text-left align-self-center">
          {postPreview.name}
        </div>
          {postPreview.message.length > 50
            ? postPreview.message.slice(0, 50) + "..."
            : postPreview.message}
        </div>
        <div className="col-2 text-left align-self-center">
          {postPreview.time}
        </div>
        <div className="col-3 align-self-center">
          <div className="row">
            <Modal
              title="Preview Post"
              appElement="#root"
              afterOpen={this.loadPostDetails.bind(this)}
              className="fa fa-eye fa-3x preview-button margin"
            >
              <PostContent post={this.state.post} preview={postPreview} />
            </Modal>
            <LinkButton
              link={`/admin/posts/edit/${this.props.postPreview.id}`}
              className="fa fa-pencil-square-o fa-3x edit-button margin"
            />
            <Button
              onClick={this.deletePost.bind(this)}
              className="fa fa-times fa-3x save-button"
            />
          </div>
        </div>
      </div>
    );
  }
}

export { ContactRequest };
