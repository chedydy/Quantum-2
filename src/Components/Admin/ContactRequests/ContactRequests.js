import React, { Component } from "react";
import { connect } from "react-redux";
import { ContactRequest } from "./ContactRequest";
import { MessageModal } from "./MessageModal";
import { ContactRequestActions } from "../../../Actions";

class ContactRequestsClass extends Component {
  componentDidMount() {
    this.props.get();
  }

  renderContactRequests() {
    const items = this.props.FilteredContactRequests.map((val, index) => {
      return (
        <div key={val.id}>
          <ContactRequest contactRequest={val} />
          <hr />
        </div>
      );
    });
    return items;
  }
  filter(filterText) {
    this.props.filter(filterText);
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
            <div
              className="col-5 text-left align-self-center header"
              onClick={() => this.props.sortBy("message")}
            >
              Message
            </div>
            <div
              className="col-2 text-left align-self-center header"
              onClick={() => this.props.sortBy("name")}
            >
              From
            </div>
            <div
              className="col-2 text-left align-self-center header"
              onClick={() => this.props.sortBy("time")}
            >
              Send Date
            </div>
            <div className="col-2 text-left align-self-center search-header">
              <i className="fas fa-search" />
              <input
                placeholder="Search..."
                className="search"
                onChange={e => {
                  this.filter(e.target.value);
                }}
              />
            </div>
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
  get: ContactRequestActions.get,
  filter: ContactRequestActions.filter,
  sortBy: ContactRequestActions.sortBy
})(ContactRequestsClass);

export { ContactRequests };
