import React, { Component } from "react";
import PageHeader from "./PageHeader";
import contactImg from "../../img/contact-bg.jpg";
class Contact extends Component {
  componentWillMount() {}

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
              <form name="sentMessage" novalidate>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      id="name"
                      required
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

export {Contact};
