import React, { Component } from "react";
import _ from "lodash";
import { Container, SubmitButton, Modal } from "../../Common";
import { PostContent } from "../../Public";
import { PostForm } from "./PostForm";
import "./EditPost.css";
import { PostEditorActions } from "../../../Actions";
import { connect } from "react-redux";

class NewPostClass extends Component {
  componentWillMount() {
    this.props.fetchCategories();
    this.onInit();
  }
  onInit() {}

  onSubmit() {
    this.props.save(this.props.preview, this.props.post).then(() => {
      this.props.history.push("/admin/posts");
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.onSubmit();
  };

  render() {
    return (
      <div>
        <Container>
          <div className="col">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <PostForm
                post={this.props.post}
                preview={this.props.preview}
                categories={this.props.categories}
                updateProps={this.props.updateProp.bind(this)}
              />
              <br />
              <div className="row justify-content-end col">
                <Modal
                  title="Preview Post"
                  appElement="#root"
                  className="fa fa-eye fa-3x save-button margin"
                >
                  <PostContent
                    post={this.props.post}
                    preview={this.props.preview}
                  />
                </Modal>
                <SubmitButton className="fa fa-floppy-o fa-3x save-button" />
              </div>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { ...state.PostEditor };
}
const NewPost = connect(mapStateToProps, {
  ...PostEditorActions
})(NewPostClass);

export { NewPost,NewPostClass };
