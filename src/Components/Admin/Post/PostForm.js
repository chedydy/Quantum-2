import React, { Component } from "react";
import {
  Input,
  Textarea,
  FileInput,
  SelectInput
} from "../../Common";
import "./EditPost.css";

class PostForm extends Component {
  render() {
    return (
      <div>
        <Input
          id="title"
          placeholder="Title"
          label="Title"
          type="text"
          value={this.props.preview.title}
          onChange={value => this.props.updateProps("preview", "title", value)}
        />
        <Input
          id="subTitle"
          placeholder="Subtitle"
          label="Subtitle"
          type="text"
          value={this.props.preview.subTitle}
          onChange={value =>
            this.props.updateProps("preview", "subTitle", value)
          }
        />
        <Input
          id="tags"
          placeholder="Tags"
          label="Tags"
          type="text"
          value={this.props.preview.tags}
          onChange={value => {
            this.props.updateProps("preview", "tags", value);
          }}
        />
        <SelectInput
          id="category"
          placeholder="Category"
          label="Category"
          value={this.props.preview.category}
          options={this.props.categories}
          onChange={value =>
            this.props.updateProps("preview", "category", value)
          }
        />
        <FileInput
          id="image"
          placeholder="Select image"
          label="Image"
          type="file"
          fileTypes="image/*"
          onChange={(image, imageUrl) => {
            this.props.updateProps("post", "image", image);
            this.props.updateProps("post", "imageUrl", imageUrl);
          }}
        />
        <Textarea
          id="content"
          placeholder="Content"
          label="Content"
          rows="10"
          value={this.props.post.content}
          onChange={value => this.props.updateProps("post", "content", value)}
        />
        <br />
      </div>
    );
  }
}

export { PostForm };
