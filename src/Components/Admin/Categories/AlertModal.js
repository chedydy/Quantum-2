import React from "react";
import { Modal } from "../../Common/Modal";
import { connect } from "react-redux";
import { ContactRequestActions, CategoriesActions } from "../../../Actions";
import "./AlertModal.css";
class AlertModalClass extends Modal {
  onRequestClose() {
    this.props.toggleAlert();
  }
  renderFooterButtons() {
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.props.deleteTagged();
            this.onRequestClose();
          }}
        >
          Delete
        </button>
        <button
          className="btn btn-primary"
          onClick={this.onRequestClose.bind(this)}
        >
          Cancel
        </button>
      </div>
    );
  }
  renderTitle() {
    return "Delete category";
  }
  renderBody() {
    const { name } = this.props;
    return (
      <div>
        <span
        >{`The selected category is not empty! This will delete all the subcategories`}</span>
        <br />
        <span>{`Are you sure you want to delete category "${name}"?`}</span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { name: state.Categories.taggedName };
}
const AlertModal = connect(mapStateToProps, {
  toggleAlert: CategoriesActions.toggleAlert,
  deleteTagged: CategoriesActions.deleteTagged
})(AlertModalClass);

export { AlertModal };
