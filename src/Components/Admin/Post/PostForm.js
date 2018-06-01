import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import _ from "lodash";
import { connect } from "react-redux";
import { IconInput, IconTextarea, ActionFileInput } from "../../Common";
import { PostEditorActions, CategoriesActions } from "../../../Actions";
import "./EditPost.css";

class PostFormClass extends Component {
  state = { start: 0, end: 0, url: "", imageUrl: "" };
  componentWillMount() {
    this.props.subscribeCategories();
  }
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
    this.props.updateProp("post", "content", newContent);
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
    this.props.updateProp("post", "content", newContent);
  }
  addH1() {
    var newContent = [
      this.props.post.content.slice(0, this.state.start),
      "#",
      this.props.post.content.slice(this.state.start)
    ].join("");
    this.props.updateProp("post", "content", newContent);
  }
  addH2() {
    var newContent = [
      this.props.post.content.slice(0, this.state.start),
      "##",
      this.props.post.content.slice(this.state.start)
    ].join("");
    this.props.updateProp("post", "content", newContent);
  }
  addH3() {
    var newContent = [
      this.props.post.content.slice(0, this.state.start),
      "### ",
      this.props.post.content.slice(this.state.start)
    ].join("");
    this.props.updateProp("post", "content", newContent);
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
    this.props.updateProp("post", "content", newContent);
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
    this.props.updateProp("post", "content", newContent);
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
    this.props.updateProp("post", "content", newContent);
  }
  onSelectContent(start, end) {
    this.setState({ start, end });
  }

  render() {
    return (
      <div className="postForm color-p">
        <IconInput
          placeholder="Title"
          label="Title"
          type="text"
          value={this.props.selected.preview.title}
          onChange={value => this.props.updateProp("preview", "title", value)}
          faIcon="fa-angle-double-down"
        />
        <IconInput
          placeholder="Subtitle"
          label="Subtitle"
          type="text"
          value={this.props.selected.preview.subTitle}
          onChange={value =>
            this.props.updateProp("preview", "subTitle", value)
          }
          faIcon="fa-angle-double-down"
        />
        <IconInput
          placeholder="Tags"
          label="Tags"
          type="text"
          value={this.props.selected.preview.tags}
          onChange={value => {
            this.props.updateProp("preview", "tags", value);
          }}
          faIcon="fa-history"
        />
        <Select
          closeOnSelect
          onChange={selected => {
            this.props.selectCategory(selected);
          }}
          options={_.map(this.props.categories, (val, index) => {
            return { label: index, value: val };
          })}
          placeholder="Category"
          value={this.props.selectedCategory}
          className="flex-5"
        />
        <Select
          closeOnSelect
          onChange={selected => {
            this.props.updateProp("preview", "subCategory", selected);
          }}
          options={_.map(this.props.subCategories, val => {
            return { label: val, value: val };
          })}
          simpleValue
          placeholder="Subcategory"
          value={this.props.selected.preview.subCategory}
          className="flex-5"
        />
        <ActionFileInput
          placeholder="Select image"
          label="Image"
          type="file"
          fileTypes="image/*"
          onChange={(image, imageUrl) => {
            this.props.setImage(image);
            this.props.updateProp("post", "imageUrl", imageUrl);
          }}
          faIcon="fa-file-image"
          faActionIcon="fa-times"
          action={e => {
            e.value = null;
            this.props.clearPhoto();
          }}
        />
        <div>
          <button
            className="fas fa-italic fa-2x save-button"
            onClick={this.italic.bind(this)}
            type="button"
          />
          <button
            className="fas fa-bold fa-2x save-button"
            onClick={this.bold.bind(this)}
            type="button"
          />
          <button
            className="fas fa-heading fa-2x save-button"
            onClick={this.addH1.bind(this)}
            type="button"
          >
            1
          </button>
          <button
            className="fas fa-heading fa-2x save-button"
            onClick={this.addH2.bind(this)}
            type="button"
          >
            2
          </button>
          <button
            className="fas fa-heading fa-2x save-button"
            onClick={this.addH3.bind(this)}
            type="button"
          >
            3
          </button>
          <input
            placeholder="Enter url"
            label="Url"
            type="text"
            value={this.state.url}
            onChange={e => this.updateState("url", e.target.value)}
          />
          <button
            className="fas fa-link fa-2x save-button"
            onClick={this.addUrl.bind(this)}
            type="button"
          />
          <input
            placeholder="Enter image url"
            label="Image url"
            type="text"
            value={this.state.imageUrl}
            onChange={e => this.updateState("imageUrl", e.target.value)}
          />
          <button
            className="fas fa-images fa-2x save-button"
            onClick={this.addImageUrl.bind(this)}
            type="button"
          />
          <button
            className="fas fa-quote-right fa-2x save-button"
            onClick={this.addQuote.bind(this)}
            type="button"
          />
        </div>
        <IconTextarea
          placeholder="Preview text"
          label="Preview text"
          rows="3"
          value={this.props.selected.preview.previewText}
          onChange={value =>
            this.props.updateProp("preview", "previewText", value)
          }
          faIcon="fa-search-plus"
        />
        <IconTextarea
          placeholder="Content"
          label="Content"
          rows="10"
          value={this.props.selected.post.content}
          onChange={value => this.props.updateProp("post", "content", value)}
          onSelect={this.onSelectContent.bind(this)}
          faIcon="fa-info"
        />
        <br />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    selected: state.PostEditor.selected,
    categories: state.Categories.categories,
    selectedCategory: state.PostEditor.selectedCategory,
    subCategories: state.PostEditor.subCategories
  };
}
const PostForm = connect(mapStateToProps, {
  setImage: PostEditorActions.setImage,
  clearPhoto: PostEditorActions.clearPhoto,
  updateProp: PostEditorActions.updateProp,
  selectCategory: PostEditorActions.selectCategory,
  subscribeCategories: CategoriesActions.subscribe
})(PostFormClass);

export { PostForm };
