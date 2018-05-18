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
  return (<button onClick={this.props.close}>Close</button>);
  }
  renderTitle() {
    return (<div className="aboutContentDetails-header">{this.props.name}
      </div>
    );
  }
  renderBody() {
    return this.props.children;
  }
}
export { Modal, AboutContentDetails };
