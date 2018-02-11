import React from "react";
import "./Modal.css";
const ModalBody = props => {
  return <div className="modal-body">{props.children}</div>;
};

const ModalHeader = props => {
  return (
    <div className="modal-header">
      {props.title}
    </div>
  );
};

const ModalFooter = props => {
  return (
    <div className="modal-footer">
      {props.children}
    </div>
  );
};

const ModalFooterForm = props => {
  return (
    <div className="modal-footer">
      <button type="submit" className="btn btn-primary">
        Save
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.onCloseClick}
      >
        Close
      </button>
    </div>
  );
};

export { ModalBody, ModalFooter, ModalHeader, ModalFooterForm };
