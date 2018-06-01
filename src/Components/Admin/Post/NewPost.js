import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid/v4";
import moment from "moment";
import { SubmitButton, Button } from "../../Common";
import { PostContent } from "../../Public";
import { PostForm } from "./PostForm";
import "./EditPost.css";
import { PostEditorActions } from "../../../Actions";
import { AuthService } from "../../../Services";
class NewPostClass extends Component {
  componentWillMount() {
    this.onInit();
  }
  onInit() {}

  onSubmit() {
    const id = uuid();
    const user = AuthService.getUser();
    const author = user.displayName;
    const preview = {
      ...this.props.selected.preview,
      id,
      author,
      publishDate: moment().format("LL"),
      authorLink: `https://www.facebook.com/app_scoped_user_id/${
        user.providerData[0].uid
      }`
    };
    const post = { ...this.props.selected.post, id };
    const promise = this.props.image
      ? this.props.saveWithImage(preview,post,this.props.image)
      : this.props.save(preview,post);
      promise.then(() => {
      this.props.history.push("/admin/posts");
    });
  }
  showPreview() {
    this.props.togglePreview();
  }
  handleSubmit = e => {
    e.preventDefault();
    this.onSubmit();
  };

  render() {
    return (
      <div
        className={this.props.showPreview ? "preview-container" : "container"}
      >
        <div
          className={`justify-content-center ${
            this.props.showPreview ? "editor" : ""
          }`}
        >
          <div className="col">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <PostForm />
              <br />
              <div className="row justify-content-end col">
                <Button
                  onClick={this.showPreview.bind(this)}
                  className="fa fa-eye fa-3x preview-button margin"
                />
                <SubmitButton className="fa fa-save fa-3x save-button" />
              </div>
            </form>
          </div>
        </div>
        <div
          className="preview"
          style={{ display: this.props.showPreview ? "inline" : "none" }}
        >
          <PostContent
            post={this.props.selected.post}
            preview={this.props.selected.preview}
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    image: state.PostEditor.image,
    showPreview: state.PostEditor.showPreview,
    selected: state.PostEditor.selected
  };
}
const NewPost = connect(mapStateToProps, {
  save: PostEditorActions.save,
  saveWithImage: PostEditorActions.saveWithImage,
  togglePreview: PostEditorActions.togglePreview
})(NewPostClass);

export { NewPost,NewPostClass };
