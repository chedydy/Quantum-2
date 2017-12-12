import React, { Component } from "react";
import uuid from "uuid/v4";

import { app } from "../../firebase/firebase";
import { Input, Textarea, Container } from "../Common";
import { PageHeader } from "./PageHeader";
import contactImg from "../../img/contact-bg.jpg";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };
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

  handleChange = (field, e) => {
    this.setState({ ...this.state, [field]: e.target.value });
  };

  render() {
    return (
      <div>
        <PageHeader image={contactImg} title={"Contact Me"}>
          Have questions? I have answers (maybe).
        </PageHeader>
        <Container>
          <p>
            Want to get in touch with me? Fill out the form below to send me a
            message and I will try to get back to you within 24 hours!
          </p>
          <form
            name="sentMessage"
            id="contactForm"
            noValidate
            onSubmit={this.handleSubmit}
          >
            <Input
              id="name"
              placeholder="Name"
              label="Name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange.bind(this, "name")}
            />
            <Input
              id="email"
              placeholder="Email Address"
              label="Email Address"
              type="email"
              value={this.state.email}
              onChange={this.handleChange.bind(this, "email")}
            />
            <Input
              id="phone"
              placeholder="Phone Number"
              label="Phone Number"
              type="tel"
              value={this.state.phone}
              onChange={this.handleChange.bind(this, "phone")}
            />
            <Textarea
              id="message"
              placeholder="Message"
              label="Message"
              value={this.state.message}
              onChange={this.handleChange.bind(this, "message")}
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
        </Container>
      </div>
    );
  }
}

export { Contact };
