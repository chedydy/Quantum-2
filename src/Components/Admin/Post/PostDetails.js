import React, { Component } from "react";
import Modal from "react-modal";
import ReactDOM from "react-dom";
import { Redirect } from 'react-router-dom';
import PostService from '../../../Services/PostsService';
import app from "../../../firebase/firebase";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class PostDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.saveModal = this.saveModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#868e96";
    (this.subtitle.style.fontFamily = "Open Sans"),
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif";
  }

  handleSubmit = e => {
    e.preventDefault();

    const post = {content: e.target.elements.Content.value};

    PostService.addPost(post)
      .then(() => {
        this.closeModal()
      })
      .catch(console.log)
  };

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  saveModal() {
    this.setState({ modalIsOpen: false });
    PostService.addPost()
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.openModal}>Open Modal</button> */}
        <div className="clearfix">
          <a className="btn btn-secondary" onClick={this.openModal}>
            New Post
          </a>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h4 ref={subtitle => (this.subtitle = subtitle)}>Post Details</h4>
          <form onSubmit={this.handleSubmit.bind(this)}>
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
            <div>
              <a
                className="btn btn-secondary float-right"
                onClick={this.closeModal}
              >
                Close
              </a>
              <div className="form-group">
              <button
                type="submit"
                className="btn btn-secondary"
              >
                Save
              </button></div>
              
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export { PostDetails };
