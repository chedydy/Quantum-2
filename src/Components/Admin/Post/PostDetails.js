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
<<<<<<< HEAD
          {
            // <div>Title</div> <input /> <div>Author</div> <input /> <div>Genre</div>
            // <select>   <option value="personaldev">Personal Development</option>
            // <option value="res">Research</option>   <option
            // value="discover">Discovery</option>   <option
            // value="arg">Argumentation</option> </select> <div>Content</div> <textarea
            // rows="5" cols="80" id="Content" />
          }
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
          <FileInput
            id="image"
            placeholder="Select image"
            label="Choose file"
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
=======
          <PostForm
            post={this.state.post}
            preview={this.state.preview}
            categories={this.state.categories}
            updateProps={this.updateProps.bind(this)}
>>>>>>> b78e85e220679f16039a568b7a53ee28bfc2483e
          />
          <br />
        </FormModal>
      </div>
    );
  }
}

export { PostDetails };
