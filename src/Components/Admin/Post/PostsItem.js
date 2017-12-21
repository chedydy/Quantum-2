import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, LinkButton } from "../../Common";
import { DeleteButton } from '../../Common/DeleteButton';
import { PostContent } from "../../Public";
import { PostService } from "../../../Services";
import './PostItem.css';

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
        <div className="col-4 text-left align-self-center">
          {postPreview.title.slice(0, 50) + "..."}
        </div>
        <div className="col-2 text-left align-self-center">
          {postPreview.author}
        </div>
        <div className="col-2 text-left align-self-center">
          {postPreview.publishDate}
        </div>
        <div className="col-3 align-self-center">
          <div className="row">
            <Modal
              title="Preview Post"
              appElement="#root"
              afterOpen={this.loadPostDetails.bind(this)}
              className="fa fa-eye fa-3x preview-button margin">
              <PostContent post={this.state.post} preview={postPreview} />        
            </Modal>
            <LinkButton link={`/admin/posts/edit/${this.props.postPreview.id}`} className="fa fa-pencil-square-o fa-3x edit-button margin">
            </LinkButton>
            <DeleteButton link={`/admin/posts/delete${this.props.postPreview.id}`} className="fa fa-times fa-3x save-button"></DeleteButton>      
          </div>
        </div>
      </div>
    );
  }
}

export { PostsItem };
