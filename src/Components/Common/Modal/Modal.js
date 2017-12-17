import React, { Component } from "react";
import ReactModal from "react-modal";
import { Button } from "../Button";
import "./Modal.css";
const ModalBody = props => {
  return <div className="modal-body">{props.children}</div>;
};

const ModalHeader = props => {
  return (
    <div className="modal-header">
      {props.title}
      <button type="button" className="close" onClick={props.onClick}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

const ModalFooter = props => {
  return (
    <div className="modal-footer">
      {props.onSaveClick ? (
        <button
          type="button"
          className="btn btn-primary"
          onClick={props.onSaveClick}
        >
          Save
        </button>
      ) : (
        <div />
      )}
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.onCloseClick}
      >
        Close
      </button>
    </div>
  );
};

class Modal extends Component {
  state = {
    modalIsOpen: false
  };
  componentWillMount() {
    ReactModal.setAppElement(this.props.appElement);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    if (this.props.afterOpen) {
      this.props.afterOpen();
    }
  }
  saveModal() {
    if (this.props.onSave) {
      this.props.onSave();
      this.setState({ modalIsOpen: false });
    }
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { title, children, buttonText } = this.props;
    return (
      <div>
        <Button onClick={this.openModal.bind(this)}>{buttonText}</Button>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal.bind(this)}
          onRequestClose={this.closeModal.bind(this)}
          className={{
            base: "",
            afterOpen: "modal-dialog",
            beforeClose: ""
          }}
          bodyOpenClassName="modal-open"
          contentLabel="Example Modal"
        >
          <div className="modal-content">
            <ModalHeader title={title} onClick={this.closeModal.bind(this)} />
            <ModalBody>{children}</ModalBody>
            <ModalFooter
              onSaveClick={
                this.props.onSave ? this.saveModal.bind(this) : undefined
              }
              onCloseClick={this.closeModal.bind(this)}
            />
          </div>
        </ReactModal>
      </div>
    );
  }
}

export { Modal };
