import React, { Component } from "react";
import ReactModal from "react-modal";
import { Button } from "../Button";
import { ModalBody, ModalFooter, ModalHeader } from "./ModalComponents";

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

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { title, children, buttonText, className } = this.props;
    return (
      <div>
        <Button onClick={this.openModal.bind(this)} className={className}>{buttonText}</Button>
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
            <ModalFooter onCloseClick={this.closeModal.bind(this)} />
          </div>
        </ReactModal>
      </div>
    );
  }
}

export { Modal };
