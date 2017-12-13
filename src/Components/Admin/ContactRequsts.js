import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import _ from 'lodash';

import { app } from "../../firebase/firebase";

class ContactRequests extends Component {
  constructor(props) {
    super(props);

    this.contactRequests = []; 
    this.state = {
        loaded: false,
        modalIsOpen: false,
        clickedItem: {}
    };

    this.handleClickDetails = this.handleClickDetails.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    app
    .ref("contact_requests/")
    .once('value')
    .then((result) => {
      this.contactRequests = 
        _(result.val()) //wrap object so that you can chain lodash methods
            .mapValues((value, id)=>_.merge({}, value, {id})) //attach id to object
            .values() //get the values of the result
            .value() //unwrap array of objects

    
        this.setState(() => {
            return {loaded: true}
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
    this.setState({ clickedItem: item});
    this.openModal();
  }

  render() {
    return (
        <div style={container}>
        {
            this.state.loaded ?
            this.contactRequests.map((item) => {
                return (
                    <div key={item.id}>
                        <div style={itemHeader}>
                            <h2 style={paddingText}>Message from {item.name} on {item.time}</h2>
                            <button style={paddingButton} onClick={this.handleClickDetails.bind(this, item)}>Details ...</button>
                        </div>
                        <p style={alignText}>
                            {item.message.slice(0, 50) + '...'}
                        </p>
                        <hr />
                    </div>
                );
            })
            : <p>Loading ...</p>
        }
        <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
        <h4 ref={id => (this.state.clickedItem.id = id)}>Contact request details</h4>
        <form>
          <div style={paddingForm}>Name</div>
          <input value={this.state.clickedItem.name}/>
          <div style={paddingForm}>E-mail</div>
          <input value={this.state.clickedItem.email}/>
          <div style={paddingForm}>Phone</div>
          <input value={this.state.clickedItem.phone}/>
          <div style={paddingForm}>Created at</div>
          <input value={this.state.clickedItem.time}/>
          <div style={paddingForm}>Content</div>
          <textarea rows="5" cols="80" id="TITLE" value={this.state.clickedItem.message}/>
          <div>
            <a
              className="btn btn-secondary float-right"
              onClick={this.closeModal}
            >
              Close
            </a>
          </div>
        </form>
      </Modal>
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
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '50px'
};

const itemHeader = {
    display: 'flex',
    justifyContent: 'space-between'
};

const paddingText = {
    paddingLeft: '20px',
    paddingTop: '12px'
};

const paddingButton = {
    marginRight: '20px'
};

const alignText = {
    display: 'flex',
    justifyContent: 'flex-start',
    paddingLeft: '20px'
};

const paddingForm = {
    paddingTop: '10px'
};

export { ContactRequests };
