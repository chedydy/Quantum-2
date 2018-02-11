import React from "react";
import { Modal } from "../../Common/Modal";
import { connect } from "react-redux";
import { ContactRequestActions } from "../../../Actions";
import "./MessageModal.css";
class MessageModalClass extends Modal {
  onRequestClose() {
    this.props.closeMessageViewer();
  }
  renderFooterButtons() {
    return (
      <button
        className="btn btn-primary"
        onClick={this.onRequestClose.bind(this)}
      >
        Close
      </button>
    );
  }
  renderTitle() {
    return "Message Details";
  }
  renderBody() {
    const {
      name,
      email,
      phone,
      time,
      message
    } = this.props.selectedContactRequest;
    return (
      <div>
        <div className="row" />
        <span>{`From: ${name}(${email}/${phone})`}</span>
        <span>{`At: ${time}`}</span>
        <div />
        <div>
          <p>{message}</p>
        </div>
      </div>
    );
  }
}

const MessageModal = connect(null, {
  closeMessageViewer: ContactRequestActions.closeMessageViewer
})(MessageModalClass);

export { MessageModal };
