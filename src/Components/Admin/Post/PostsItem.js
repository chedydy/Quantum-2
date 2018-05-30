import React, { Component } from "react";
import { LinkButton, Button } from "../../Common";
import { connect } from "react-redux";
import { PostsActions } from "../../../Actions";
import "./PostItem.css";

class PostsItemClass extends Component {
  state = {
    post: {
      content: ""
    }
  };
  deletePost() {
    this.props.delete({
      id: this.props.postPreview.id,
      category: this.props.postPreview.category
    });
  }
  render() {
    const { postPreview } = this.props;
    return (
      <div className="row justify-content-center">
        <div className="col-4 text-left align-self-center">
          {postPreview.title.length > 50
            ? postPreview.title.slice(0, 50) + "..."
            : postPreview.title}
        </div>
        <div className="col-2 text-left align-self-center">
          {postPreview.author}
        </div>
        <div className="col-2 text-left align-self-center">
          {postPreview.publishDate}
        </div>
        <div className="col-3 align-self-center">
          <div className="row">
            <LinkButton
              link={`/admin/posts/edit/${this.props.postPreview.id}`}
              className="fa fa-edit fa-3x edit-button margin"
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

function mapStateToProps(state) {
  return { ...state.Posts };
}
const PostsItem = connect(mapStateToProps, {
  delete: PostsActions.delete
})(PostsItemClass);

export { PostsItem };
