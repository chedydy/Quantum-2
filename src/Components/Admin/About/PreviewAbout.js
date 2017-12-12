import React, { Component } from "react";
import { Container, Button, LinkButton, Textarea } from "../../Common";
import { About } from "../../Public";
import Modal from "react-modal";
import aboutService from "../../../Services/AboutService";
class PreviewAbout extends Component {
  //   state = {
  //     modalIsOpen: false
  //   };

  //   openModal() {
  //     this.setState({ modalIsOpen: true });
  //   }
  closeModal() {
    this.props.modalIsOpen = false;
  }

  //   saveModal() {
  //     this.setState({ modalIsOpen: false });
  //   }

  render() {
    return (
      <Modal isOpen={this.props.modalIsOpen}>
        {/* <About /> */}
        Ceva
      </Modal>
    );
  }
}

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)"
//   }
// };

export { PreviewAbout };
