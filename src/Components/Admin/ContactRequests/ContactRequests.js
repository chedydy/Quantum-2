import React, { Component } from "react";
import Modal from "react-modal";
import _ from "lodash";
import { ContactRequest } from "./ContactRequest";
import { ContactRequestsService } from "../../../Services";


class ContactRequests extends Component {
  constructor(props) {
    super(props);

    this.contactRequests = [];
    this.state = {
      loaded: false,
      modalIsOpen: false,
      clickedItem: {},
      contactRequests: []
    };

    this.handleClickDetails = this.handleClickDetails.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    ContactRequestsService.get().then(values => {
      this.setState(() => {
        return { loaded: true, contactRequests: values };
      });
    });
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.state.clickedItem.id.style.color = "#868e96";
    (this.state.clickedItem.id.style.fontFamily = "Open Sans"),
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
    this.setState({ clickedItem: {} });
  }

  handleClickDetails(item) {
    this.setState({ clickedItem: item });
    this.openModal();
  }

  //render() {
  // return (
  //     <div style={container}>
  //     {
  //         this.state.loaded ?
  //         this.contactRequests.map((item) => {
  //             return (
  //                 <div key={item.id}>
  //                     <div style={itemHeader}>
  //                         <h2 style={paddingText}>Message from {item.name} on {item.time}</h2>
  //                         <button className="fa fa-info-circle fa-3x preview-button margin" style={paddingButton} onClick={this.handleClickDetails.bind(this, item)}></button>
  //                     </div>
  //                     <p style={alignText}>
  //                         {item.message.slice(0, 50) + '...'}
  //                     </p>
  //                     <hr />
  //                 </div>
  //             );
  //         })
  //         : <p>Loading ...</p>
  //     }
  //     <Modal
  //         isOpen={this.state.modalIsOpen}
  //         onAfterOpen={this.afterOpenModal}
  //         onRequestClose={this.closeModal}
  //         style={customStyles}
  //         contentLabel="Example Modal"
  //     >
  //     <h4 ref={id => (this.state.clickedItem.id = id)}>Contact request details</h4>
  //     <form>
  //       <div style={paddingForm}>Name</div>
  //       <input value={this.state.clickedItem.name}/>
  //       <div style={paddingForm}>E-mail</div>
  //       <input value={this.state.clickedItem.email}/>
  //       <div style={paddingForm}>Phone</div>
  //       <input value={this.state.clickedItem.phone}/>
  //       <div style={paddingForm}>Created at</div>
  //       <input value={this.state.clickedItem.time}/>
  //       <div style={paddingForm}>Content</div>
  //       <textarea rows="5" cols="80" id="TITLE" value={this.state.clickedItem.message}/>
  //       <div>
  //         <a
  //           className="btn btn-secondary float-right"
  //           onClick={this.closeModal}
  //         >
  //           Close
  //         </a>
  //       </div>
  //     </form>
  //   </Modal>
  //   </div>
  // );
  renderContactRequests() {
    const items = this.state.contactRequests.map((val, index) => {
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

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const container = {
  display: "flex",
  flexDirection: "column",
  paddingTop: "50px"
};

const itemHeader = {
  display: "flex",
  justifyContent: "space-between"
};

const paddingText = {
  paddingLeft: "20px",
  paddingTop: "12px"
};

const paddingButton = {
  marginRight: "20px"
};

const alignText = {
  display: "flex",
  justifyContent: "flex-start",
  paddingLeft: "20px"
};

const paddingForm = {
  paddingTop: "10px"
};

export { ContactRequests };
