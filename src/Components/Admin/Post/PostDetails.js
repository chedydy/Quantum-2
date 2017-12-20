import React, {Component} from "react";
import uuid from "uuid/v4";
import {
  Input,
  Textarea,
  FileInput,
  Container,
  SubmitButton,
  Button,
  FormModal
} from "../../Common";
import {PostContent} from "../../Public";
import {PostPreviewService, PostService} from "../../../Services";
import "./EditPost.css";

class PostDetails extends Component {

  state = {
    post: {
      content: ""
    },
    preview: {
      title: "",
      subTitle: "",
      tags: ""
      // image: "", imagePreviewUrl: ""
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    //    const image = e.target.elements.image.files[0];
    const id = uuid();
    Promise.all([
      PostPreviewService.updatePreview({
        ...this.state.preview,
        id
      }),
      PostService.updatePost({
        ...this.state.post,
        id
      })
    ]).catch(console.log);
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
        preview: {
          ...this.state.preview,
          image: image,
          imagePreviewUrl: reader.result
        }
      });
    };
    reader.readAsDataURL(image);
  };

  render() {
    return (
      <div>
        <FormModal
          buttonText="New Post"
          title="New Post"
          appElement="#root"
          onSubmit={this
          .handleSubmit
          .bind(this)}>
          {// <div>Title</div> <input /> <div>Author</div> <input /> <div>Genre</div>
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
            onChange={this
            .handlePreviewChange
            .bind(this, "title")}/>
          <Input
            id="subTitle"
            placeholder="Subtitle"
            label="Subtitle"
            type="text"
            value={this.state.preview.subTitle}
            onChange={this
            .handlePreviewChange
            .bind(this, "subTitle")}/>
          <Input
            id="tags"
            placeholder="Tags"
            label="Tags"
            type="text"
            value={this.state.preview.tags}
            onChange={this
            .handlePreviewChange
            .bind(this, "tags")}/> {/* <img src={this.state.preview.imagePreviewUrl} alt="Selected" />
        <FileInput
          id="image"
          placeholder="Select image"
          label="Image"
          type="file"
          fileTypes="image/*"
          onChange={this.handleImageChange.bind(this)}
        /> */}
          <Textarea
            id="content"
            placeholder="Content"
            label="Content"
            rows="10"
            value={this.state.post.content}
            onChange={this
            .handlePostChange
            .bind(this, "content")}/>
          <br/>
        </FormModal>
      </div>
    );
  }
}

export {PostDetails};
