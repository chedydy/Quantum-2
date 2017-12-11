import React, { Component } from "react";
import { Input, Textarea, Container, SubmitButton, Button } from "../../Common";
import aboutService from "../../../Services/AboutService";
class EditAbout extends Component {
  state = {
    title: "",
    content: ""
  };
  componentWillMount() {
    aboutService
      .getAbout()
      .then(about => {
        this.setState({ title: about.title, content: about.content });
      })
      .catch(console.log);
  }

  handleSubmit = e => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const content = e.target.elements.content.value;
    aboutService.setAbout({ title, content }).then(() => {
      this.props.history.push("/admin/about");
    });
  };

  handleChange = (field, e) => {
    this.setState({ ...this.state, [field]: e.target.value });
  };

  render() {
    return (
      <div>
        <Container>
          <div className="col">
            <form
              name="sentMessage"
              id="contactForm"
              noValidate
              onSubmit={this.handleSubmit}
            >
              <Input
                id="title"
                placeholder="Title"
                label="Title"
                type="text"
                value={this.state.title}
                onChange={this.handleChange.bind(this, "title")}
              />
              <Textarea
                id="content"
                placeholder="Content"
                label="Content"
                rows="10"
                value={this.state.content}
                onChange={this.handleChange.bind(this, "content")}
              />
              <br />
              <div className="row justify-content-end col">
                <Button>Preview</Button>
                <SubmitButton>Save</SubmitButton>
              </div>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export { EditAbout };
