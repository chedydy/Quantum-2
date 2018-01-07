import React, { Component } from "react";
import _ from "lodash";
import { Container, SubmitButton, Modal } from "../../Common";
import { PostContent } from "../../Public";
import { PostForm } from "./PostForm";
import {
  PostPreviewService,
  PostService,
  CategoriesService
} from "../../../Services";
import "./EditPost.css";

class NewPost extends Component {
  state = {
    post: {
      content: ""
    },
    preview: {
      title: "",
      subTitle: "",
      tags: "",
      category: ""
    },
    categories: []
  };

  componentWillMount() {
    CategoriesService.subscribe(this.setCategoriesState.bind(this));
    this.onInit();
  }
  onInit() {}
  setCategoriesState(categories) {
    this.setState({ categories });
  }
  onSubmit() {
    Promise.all([
      PostPreviewService.updatePreview({
        ...this.state.preview,
        tags: _.mapKeys(this.state.preview.tags.split(" "))
      }),
      PostService.updatePost(this.state.post),
      CategoriesService.update(
        this.state.preview.category,
        this.state.preview.id
      )
    ])
      .then(() => {
        this.props.history.push("/admin/posts/");
      })
      .catch(console.log);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.onSubmit();
  };

  updateProps(field, subField, value) {
    this.setState({
      ...this.state,
      [field]: {
        ...this.state[field],
        [subField]: value
      }
    });
  }
  render() {
    return (
      <div>
        <Container>
          <div className="col">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <PostForm
                post={this.state.post}
                preview={this.state.preview}
                categories={this.state.categories}
                updateProps={this.updateProps.bind(this)}
              />
              <br />
              <div className="row justify-content-end col">
                <Modal
                  title="Preview Post"
                  appElement="#root"
                  className="fa fa-eye fa-3x save-button margin"
                >
                  <PostContent
                    post={this.state.post}
                    preview={this.state.preview}
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

export { NewPost };
