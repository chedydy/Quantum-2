import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { ContactRequest } from "./ContactRequest";
import { MessageModal } from "./MessageModal";
import { ContactRequestActions } from "../../../Actions";

class ContactRequestsClass extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.get();
  }

  renderContactRequests() {
    const items = this.props.ContactRequests.map((val, index) => {
      if (val.id) {
        return (
          <div key={val.id}>
            <ContactRequest contactRequest={val} />
            <hr />
          </div>
        );
      }
    });
    return items;
  }
  render() {
    return (
      <div className="row justify-content-center align-items-center">
        <MessageModal
          isOpen={this.props.messageIsOpen}
          selectedContactRequest={this.props.selectedContactRequest}
        />
        <div className="col-11">
          <div
            className="row justify-content-center"
            style={{
              marginBottom: "30px",
              marginTop: "30px",
              fontWeight: "bold",
              fontSize: "25px",
              border: "2px solid #0085A1"
            }}
          >
            <div className="col-5 text-left align-self-center">Message</div>
            <div className="col-2 text-left align-self-center">From</div>
            <div className="col-2 text-left align-self-center">Send Date</div>
            <div className="col-2 text-left align-self-center" />
          </div>
          {this.renderContactRequests()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.ContactRequests };
}
const ContactRequests = connect(mapStateToProps, {
  get: ContactRequestActions.get
})(ContactRequestsClass);

export { ContactRequests };
