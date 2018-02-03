import React, { Component } from "react";
import { Modal, LinkButton, Button } from "../../Common";
import "./ContactRequests.css";

class ContactRequest extends Component {
  render() {
    const { contactRequest } = this.props;
    return (
      <div className="row justify-content-center">
        <div className="col-5 text-left align-self-center">
          {contactRequest.message.length > 50
            ? contactRequest.message.slice(0, 50) + "..."
            : contactRequest.message}
        </div>
        <div className="col-2 text-left align-self-center">
          {contactRequest.name}
        </div>
        <div className="col-2 text-left align-self-center">
          {contactRequest.time}
        </div>
        <div className="col-2 align-self-center">
          <div className="row" />
        </div>
      </div>
    );
  }
}

export { ContactRequest };
