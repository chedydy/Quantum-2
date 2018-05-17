import React, { Component } from "react";
import _ from "lodash";
import { Container, SubmitButton, Modal, Button } from "../../Common";
import { PostContent } from "../../Public";
import { PostForm } from "./PostForm";
import "./EditPost.css";
import { PostEditorActions, CategoriesActions } from "../../../Actions";
import { connect } from "react-redux";

class NewPostClass extends Component {
  componentWillMount() {
    this.props.subscribeCategories();
    this.onInit();
  }
  onInit() {}

  onSubmit() {
    this.props.save(this.props.preview, this.props.post).then(() => {
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
              <PostForm
                post={this.props.post}
                preview={this.props.preview}
                categories={this.props.categories}
                subCategories={this.props.subCategories}
                selectedCategory={this.props.selectedCategory}
                updateProps={this.props.updateProp.bind(this)}
                selectCategories={this.props.selectCategory.bind(this)}
              />
              <br />
              <div className="row justify-content-end col">
                <Button
                  onClick={this.showPreview.bind(this)}
                  className="fa fa-eye fa-3x preview-button margin"
                />
                <SubmitButton className="fa fa-floppy-o fa-3x save-button" />
              </div>
            </form>
          </div>
        </div>
        <div
          className="preview"
          style={{ display: this.props.showPreview ? "inline" : "none" }}
        >
          <PostContent post={this.props.post} preview={this.props.preview} />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state.PostEditor,
    categories: state.Categories.categories
  };
}
const NewPost = connect(mapStateToProps, {
  ...PostEditorActions,
  subscribeCategories: CategoriesActions.subscribe
})(NewPostClass);

export { NewPost, NewPostClass };
