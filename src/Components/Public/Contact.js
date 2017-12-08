import React, { Component } from "react";
import uuid from "uuid/v4";

import { app } from "../../firebase/firebase";
import { ContactInput, ContactTextarea } from "../Common";
import {PageHeader} from "./PageHeader";
import contactImg from "../../img/contact-bg.jpg";

class Contact extends Component {
  componentWillMount() {}

  handleSubmit = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;
    const message = e.target.elements.message.value;

    app
      .ref("contact_requests/" + uuid())
      .set({
        name,
        email,
        phone,
        message,
        done: false
      })
      .then(() => {
        this.props.history.push("/");
      });
  };

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
              <form
                name="sentMessage"
                id="contactForm"
                noValidate
                onSubmit={this.handleSubmit}
              >
                <ContactInput
                  id="name"
                  placeholder="Name"
                  label="Name"
                  type="text"
                />
                <ContactInput
                  id="email"
                  placeholder="Email Address"
                  label="Email Address"
                  type="email"
                />
                <ContactInput
                  id="phone"
                  placeholder="Phone Number"
                  label="Phone Number"
                  type="tel"
                />
                <ContactTextarea
                  id="message"
                  placeholder="Message"
                  label="Message"
                />

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

export {Contact}

