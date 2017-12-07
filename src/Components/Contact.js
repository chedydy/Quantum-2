import React, { Component } from "react";
import uuid from 'uuid/v4';

import { app } from "../firebase/firebase";

import PageHeader from "./PageHeader";
import contactImg from "../img/contact-bg.jpg";

class Contact extends Component {
  componentWillMount() {
    
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;
    const message = e.target.elements.message.value;

    app.ref('contact_requests/' + uuid()).set({
      name,
      email,
      phone,
      message,
      done: false
    })
      .then(() => {
        this.props.history.push('/');
      });
  }

  render() {
    return (
      <div>
        <PageHeader image={contactImg} title={"Contact Me"}>
          Have questions? I have answers (maybe).
        </PageHeader>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <p>
                Want to get in touch with me? Fill out the form below to send me
                a message and I will try to get back to you within 24 hours!
              </p>
              <form name="sentMessage" id="contactForm" noValidate onSubmit={this.handleSubmit}>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      id="name"
                      required
                      data-validation-required-message="Please enter your name."
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      id="email"
                      required
                      data-validation-required-message="Please enter your email address."
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group col-xs-12 floating-label-form-group controls">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      id="phone"
                      required
                      data-validation-required-message="Please enter your phone number."
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label>Message</label>
                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Message"
                      id="message"
                      required
                      data-validation-required-message="Please enter a message."
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <br />
                <div id="success" />
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    id="sendMessageButton"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
