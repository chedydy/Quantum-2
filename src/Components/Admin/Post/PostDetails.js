import React, { Component } from "react";
import uuid from "uuid/v4";
import moment from "moment";
import _ from "lodash";
import {
  FormModal,
} from "../../Common";
import {
  PostPreviewService,
  PostService,
  AuthService,
  CategoriesService
} from "../../../Services";
import { PostForm } from "./PostForm";
import "./EditPost.css";

class PostDetails extends Component {
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
  }
  setCategoriesState(categories) {
    this.setState({ categories });
  }
  handleSubmit = e => {
    e.preventDefault();
    const id = uuid();
    const user = AuthService.getUser();
    const author = user.displayName;
    return Promise.all([
      PostPreviewService.updatePreview({
        ...this.state.preview,
        id,
        author,
        publishDate: moment().format("LL"),
        authorLink: `https://www.facebook.com/app_scoped_user_id/${
          user.providerData[0].uid
        }`,
        tags: _.mapKeys(this.state.preview.tags.split(" "))
      }),
      PostService.updatePost({
        ...this.state.post,
        id
      }),
      CategoriesService.add(this.state.preview.category, id)
    ]);
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
        <FormModal
          style={{ color: "white" }}
          buttonText="New Post"
          title="New Post"
          appElement="#root"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <PostForm
            post={this.state.post}
            preview={this.state.preview}
            categories={this.state.categories}
            updateProps={this.updateProps.bind(this)}
          />
          <br />
        </FormModal>
      </div>
    );
  }
}

export { PostDetails };
