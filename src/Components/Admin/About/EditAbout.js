import React, { Component } from "react";
import { Input, Textarea, Container } from "../../Common";
import aboutService from "../../../Services/AboutService";
class EditAbout extends Component {
  componentWillMount() {}

  handleSubmit = e => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const content = e.target.elements.content.value;
    aboutService.setAbout({ title, content }).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div>
        <Container>
          <form
            name="sentMessage"
            id="contactForm"
            noValidate
            onSubmit={this.handleSubmit}
          >
            <Input id="title" placeholder="Title" label="Title" type="text" />
            <Textarea id="content" placeholder="Content" label="Content" />

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

export { EditAbout };
