import React, { Component } from "react";
import "../Common/Button.css";
import { Textarea, Container, IconInput } from "../Common";
import { PageHeader } from "./PageHeader";
import contactImg from "../../img/contactdonepng.png";
import { ContactRequestsService } from "../../Services";

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
    const { name, email, phone, message } = this.state;
    ContactRequestsService.add({ name, email, phone, message }).then(() => {
      this.props.history.push("/");
    });
  };

  handleChange = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    return (
      <div>
        <PageHeader image={contactImg} title={"Contact Us"}>
          If you have any questions regarding our NGO, do not hesitate to tell
          us.
        </PageHeader>
        <Container>
          <div className="col color-p">
            <p>
              Want to get in touch with us? Fill out the form below to send us a
              message and we will try to get back to you within 24 hours!
            </p>
            <form
              name="sentMessage"
              id="contactForm"
              noValidate
              onSubmit={this.handleSubmit}
            >
              <IconInput
                id="name"
                placeholder="Name"
                label="Name"
                type="text"
                faIcon="fa-user"
                value={this.state.name}
                onChange={this.handleChange.bind(this, "name")}
              />
              <IconInput
                id="email"
                placeholder="Email Address"
                label="Email Address"
                type="email"
                faIcon="fa-envelope"
                value={this.state.email}
                onChange={this.handleChange.bind(this, "email")}
              />
              <IconInput
                id="phone"
                placeholder="Phone Number"
                label="Phone Number"
                type="tel"
                faIcon="fa-phone"
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
                  className="btn btn-primary btn-round"
                  id="sendMessageButton"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export { Contact };
