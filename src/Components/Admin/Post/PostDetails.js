import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { FormModal } from "../../Common";
import {PostService} from "../../../Services";

class PostDetails extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const post = { content: e.target.elements.Content.value };
    PostService.addPost(post)
      .then(() => {
        this.closeModal();
      })
      .catch(console.log);
  };

  render() {
    return (
      <div>
        <FormModal
          buttonText="New Post"
          title="New Post"
          appElement="#root"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <div>Title</div>
          <input />
          <div>Author</div>
          <input />
          <div>Genre</div>
          <select>
            <option value="personaldev">Personal Development</option>
            <option value="res">Research</option>
            <option value="discover">Discovery</option>
            <option value="arg">Argumentation</option>
          </select>
          <div>Content</div>
          <textarea rows="5" cols="80" id="Content" />
        </FormModal>
      </div>
    );
  }
}

export { PostDetails };
