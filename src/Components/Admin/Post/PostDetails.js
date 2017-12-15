import React, { Component } from "react";
import Modal from "react-modal";
import ReactDOM from "react-dom";
import { Redirect } from 'react-router-dom';

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

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  saveModal() {
    this.setState({ modalIsOpen: false });
  }

  // writePostData(postId, title, author, genre, content) {
  //   firebase.database().ref('postdetails/' + postId).set({
  //     title: title,
  //     author: author,
  //     genre: genre,
  //     content: content
  //   });
  // }

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
          <form>
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
            <textarea rows="5" cols="80" id="TITLE" />
            <div>
              <a
                className="btn btn-secondary float-right"
                onClick={this.closeModal}
              >
                Close
              </a>
              <a
                className="btn btn-secondary float-right"
                onClick={this.saveModal}
              >
                Save
              </a>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export { PostDetails };
