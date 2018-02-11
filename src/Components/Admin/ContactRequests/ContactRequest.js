import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "../../Common";
import { ContactRequestActions } from "../../../Actions";
import "./ContactRequests.css";

class ContactRequestClass extends Component {
  openMessage(){
    this.props.openMessage(this.props.contactRequest);
  }
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
          <div className="row">
            <Button
              onClick={this.openMessage.bind(this)}
              className="fa fa-eye fa-3x preview-button margin"
            />
          </div>
        </div>
      </div>
    );
  }
}

const ContactRequest = connect(null, {
  openMessage: ContactRequestActions.openMessage
})(ContactRequestClass);

export { ContactRequest };
