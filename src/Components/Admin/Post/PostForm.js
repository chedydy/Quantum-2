import React, { Component } from "react";
import { Input, Textarea, FileInput, SelectInput } from "../../Common";
import "./EditPost.css";

class PostForm extends Component {
  state = { start: 0, end: 0, url: "", imageUrl: "" };
  updateState(field, value) {
    this.setState({ [field]: value });
  }
  italic() {
    const text = this.props.post.content.slice(
      this.state.start,
      this.state.end
    );
    const textWithQuote = `*${text}*`;
    var newContent = [
      this.props.post.content.slice(0, this.state.start),
      textWithQuote,
      this.props.post.content.slice(this.state.end)
    ].join("");
    this.props.updateProps("post", "content", newContent);
  }
  bold() {
    const text = this.props.post.content.slice(
      this.state.start,
      this.state.end
    );
    const textWithQuote = `**${text}**`;
    var newContent = [
      this.props.post.content.slice(0, this.state.start),
      textWithQuote,
      this.props.post.content.slice(this.state.end)
    ].join("");
    this.props.updateProps("post", "content", newContent);
  }
  addH1() {
    var newContent = [
      this.props.post.content.slice(0, this.state.start),
      "#",
      this.props.post.content.slice(this.state.start)
    ].join("");
    this.props.updateProps("post", "content", newContent);
  }
  addH2() {
    var newContent = [
      this.props.post.content.slice(0, this.state.start),
      "##",
      this.props.post.content.slice(this.state.start)
    ].join("");
    this.props.updateProps("post", "content", newContent);
  }
  addH3() {
    var newContent = [
      this.props.post.content.slice(0, this.state.start),
      "### ",
      this.props.post.content.slice(this.state.start)
    ].join("");
    this.props.updateProps("post", "content", newContent);
  }
  addImageUrl() {
    const text = this.props.post.content.slice(
      this.state.start,
      this.state.end
    );
    const textWithUrl = `![${text}](${this.state.imageUrl} "${text}")`;
    var newContent = [
      this.props.post.content.slice(0, this.state.start),
      textWithUrl,
      this.props.post.content.slice(this.state.end)
    ].join("");
    this.props.updateProps("post", "content", newContent);
  }
  addUrl() {
    const text = this.props.post.content.slice(
      this.state.start,
      this.state.end
    );
    const textWithUrl = `[${text}](${this.state.url})`;
    var newContent = [
      this.props.post.content.slice(0, this.state.start),
      textWithUrl,
      this.props.post.content.slice(this.state.end)
    ].join("");
    this.props.updateProps("post", "content", newContent);
  }
  addQuote() {
    const text = this.props.post.content.slice(
      this.state.start,
      this.state.end
    );
    const textWithQuote = `> ${text}`;
    var newContent = [
      this.props.post.content.slice(0, this.state.start),
      textWithQuote,
      this.props.post.content.slice(this.state.end)
    ].join("");
    this.props.updateProps("post", "content", newContent);
  }
  onSelectContent(start, end) {
    this.setState({ start, end });
  }

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
        <div>
          <button className="fas fa-italic fa-2x save-button" onClick={this.italic.bind(this)} type="button">
          </button>
          <button className="fas fa-bold fa-2x save-button" onClick={this.bold.bind(this)} type="button">
          </button>
          <button className="fas fa-heading fa-2x save-button" onClick={this.addH1.bind(this)} type="button">1
          </button>
          <button className="fas fa-heading fa-2x save-button" onClick={this.addH2.bind(this)} type="button">2
          </button>
          <button className="fas fa-heading fa-2x save-button" onClick={this.addH3.bind(this)} type="button">3
          </button>
          <input
            placeholder="Enter url"
            label="Url"
            type="text"
            value={this.state.url}
            onChange={e => this.updateState("url", e.target.value)}
          />
          <button className="fas fa-link fa-2x save-button" onClick={this.addUrl.bind(this)} type="button">
          </button>
          <input
            placeholder="Enter image url"
            label="Image url"
            type="text"
            value={this.state.imageUrl}
            onChange={e => this.updateState("imageUrl", e.target.value)}
          />
          <button className="fas fa-images fa-2x save-button" onClick={this.addImageUrl.bind(this)} type="button">
          </button>
          <button className="fas fa-quote-right fa-2x save-button" onClick={this.addQuote.bind(this)} type="button">
          </button>
        </div>
        <Textarea
          id="content"
          placeholder="Content"
          label="Content"
          rows="10"
          value={this.props.post.content}
          onChange={value => this.props.updateProps("post", "content", value)}
          onSelect={this.onSelectContent.bind(this)}
        />
        <br />
      </div>
    );
  }
}

export { PostForm };
