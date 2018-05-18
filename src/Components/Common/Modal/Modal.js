import React, { Component } from "react";
import ReactModal from "react-modal";
import { ModalBody, ModalFooter, ModalHeader } from "./ModalComponents";

class Modal extends Component {
  componentWillMount() {
    ReactModal.setAppElement("#root");
  }
  renderFooterButtons() {
    return;
  }
  renderTitle() {
    return this.props.title;
  }
  renderBody() {
    return this.props.children;
  }
  onRequestClose() {}
  render() {
    const { title, children, className } = this.props;
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        onRequestClose={this.onRequestClose.bind(this)}
        className={{
          base: "",
          afterOpen: "modal-dialog",
          beforeClose: ""
        }}
        bodyOpenClassName="modal-open"
        contentLabel="Example Modal"
      >
        <div className="modal-content">
          <ModalHeader title={this.renderTitle()} />
          <ModalBody>{this.renderBody()}</ModalBody>
          <ModalFooter>{this.renderFooterButtons()}</ModalFooter>
        </div>
      </ReactModal>
    );
  }
}

class AboutContentDetails extends Modal {
  renderFooterButtons() {
    return (
      <div onClick={this.props.close}>
        <button className="btn-round btn btn-primary">Close</button>
      </div>
    );
  }
  renderTitle() {
    return <div className="aboutContentDetails-header">{this.props.name}</div>;
  }
  renderBody() {
    return (
      <div className="aboutContentDetails-div">
        <div className="aboutContentDetails-body">{this.props.children}</div>
        <img
          className="aboutContentDetails-body-img"
          src={this.props.image}
          alt="Pic"
        />
      </div>
    );
  }
}
export { Modal, AboutContentDetails };
