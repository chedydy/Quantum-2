import React, { Component } from "react";
import uuid from "uuid/v4";
import moment from "moment";
import _ from "lodash";
import {
  Input,
  Textarea,
  FileInput,
  FormModal,
  SelectInput
} from "../../Common";
import {
  PostPreviewService,
  PostService,
  AuthService,
  CategoriesService
} from "../../../Services";
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
        tags: this.state.tagsArray
      }),
      PostService.updatePost({
        ...this.state.post,
        id
      }),
      CategoriesService.add(this.state.preview.category, id)
    ]);
  };

  handlePreviewChange = (field, e) => {
    this.setState({
      ...this.state,
      preview: {
        ...this.state.preview,
        [field]: e.target.value
      }
    });
  };

  handleTagsChange = e => {
    const value = e.target.value;
    const tags = value.split(" ");
    const newState = {
      ...this.state,
      preview: {
        ...this.state.preview,
        tags: value
      },
      tagsArray: _.mapKeys(tags)
    };
    this.setState(newState);
  };

  handlePostChange = (field, e) => {
    this.setState({
      ...this.state,
      post: {
        ...this.state.post,
        [field]: e.target.value
      }
    });
  };

  handleImageChange = e => {
    e.preventDefault();
    let reader = new FileReader();
    let image = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        ...this.state,
        post: {
          ...this.state.post,
          image
        }
      });
    };
    reader.readAsDataURL(image);
  };

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
          <Input
            id="title"
            placeholder="Title"
            label="Title"
            type="text"
            value={this.state.preview.title}
            onChange={this.handlePreviewChange.bind(this, "title")}
          />
          <Input
            id="subTitle"
            placeholder="Subtitle"
            label="Subtitle"
            type="text"
            value={this.state.preview.subTitle}
            onChange={this.handlePreviewChange.bind(this, "subTitle")}
          />
          <Input
            id="tags"
            placeholder="Tags"
            label="Tags"
            type="text"
            value={this.state.preview.tags}
            onChange={this.handleTagsChange.bind(this)}
          />
          <SelectInput
            id="category"
            placeholder="Category"
            label="Category"
            value={this.state.category}
            options={this.state.categories}
            onChange={this.handlePreviewChange.bind(this, "category")}
          />
          <FileInput
            id="image"
            placeholder="Select image"
            label="Image"
            type="file"
            required
            fileTypes="image/*"
            onChange={this.handleImageChange.bind(this)}
          />
          <Textarea
            id="content"
            placeholder="Content"
            label="Content"
            rows="10"
            value={this.state.post.content}
            onChange={this.handlePostChange.bind(this, "content")}
          />
          <br />
        </FormModal>
      </div>
    );
  }
}

export { PostDetails };
