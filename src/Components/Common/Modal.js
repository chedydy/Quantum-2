import React, { Component } from "react";

const ModalBody = props => {
  return <div className="modal-body">{props.children}</div>;
};

const ModalHeader = props => {
  return (
    <div className="modal-header">
      {props.title}
      <button type="button" className="close" onClick={props.onClick}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

const ModalFooter = props => {
  return (
    <div className="modal-footer">
      <button type="button" className="btn btn-primary" onClick={props.onClick}>
        Close
      </button>
    </div>
  );
};

// const Modal = props => {
//   return (
//     <div className="modal fade">
//       <div className="modal-dialog">
//         <div className="modal-content">
//           <ModalHeader title={props.title} />
//           <ModalBody>{props.children}</ModalBody>
//           <ModalFooter />
//         </div>
//       </div>
//     </div>
//   );
// };

class Modal extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <ModalHeader title={title} />
            <ModalBody>{children}</ModalBody>
            <ModalFooter />
          </div>
        </div>
      </div>
    );
  }
}

export { Modal };
