import React from "react";
import { connect } from "react-redux";
import { Modal } from "../Common";
import { AuthorsActions } from "../../Actions";
import "./AboutContent.css";
class AuthorModalClass extends Modal {
  renderFooterButtons() {
    return (
      <div onClick={() => this.props.hide()}>
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
        <div className="aboutContentDetails-body">
          <p className="text-style">{this.props.about}</p>
        </div>
        <img
          className="aboutContentDetails-body-img"
          src={this.props.imageUrl}
          alt="Pic"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.Authors.selected,
    isOpen: state.Authors.show
  };
}
const AuthorModal = connect(mapStateToProps, {
  hide: AuthorsActions.hide
})(AuthorModalClass);

export { AuthorModal };
