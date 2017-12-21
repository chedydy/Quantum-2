import React, { Component } from "react";
import ReactModal from "react-modal";
import { Button } from "../Button";
import { ModalBody, ModalFooterForm, ModalHeader } from "./ModalComponents";

class FormModal extends Component {
  state = {
    modalIsOpen: false
  };
  componentWillMount() {
    ReactModal.setAppElement(this.props.appElement);
  }

  afterOpenModal() {
    if (this.props.afterOpen) {
      this.props.afterOpen();
    }
  }

  handleSubmit = e => {
    this.props
      .onSubmit(e)
      .then(() => {
        this.closeModal();
      })
      .catch(console.log);
  };

  openModal() {
    this.setState({ modalIsOpen: true });
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
            <form onSubmit={this.handleSubmit.bind(this)}>
              <ModalHeader title={title} onClick={this.closeModal.bind(this)} />
              <ModalBody>{children}</ModalBody>
              <ModalFooterForm onCloseClick={this.closeModal.bind(this)} />
            </form>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export { FormModal };
