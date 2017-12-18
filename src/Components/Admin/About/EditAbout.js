import React, { Component } from "react";
import {
  Input,
  Textarea,
  FileInput,
  Container,
  SubmitButton
} from "../../Common";
import { PreviewAbout } from "./PreviewAbout";
import aboutService from "../../../Services/AboutService";
class EditAbout extends Component {
  state = {
    title: "",
    content: "",
    image: "",
    imagePreviewUrl: ""
  };
  setAbout(about) {
    this.setState({ title: about.title, content: about.content });
  }
  componentWillMount() {
    aboutService.getAbout(this.setAbout.bind(this));
  }

  handleSubmit = e => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const content = e.target.elements.content.value;
    const image = e.target.elements.image.files[0];
    aboutService.setAbout({ title, content, image }).then(() => {
      this.props.history.push("/admin/about");
    });
  };

  handleChange = (field, e) => {
    this.setState({ ...this.state, [field]: e.target.value });
  };

  handleImageChange = e => {
    e.preventDefault();
    let reader = new FileReader();
    let image = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        ...this.state,
        image: image,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(image);
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
              <img src={this.state.imagePreviewUrl} alt="Selected image" />
              <FileInput
                id="image"
                placeholder="Select image"
                label="Image"
                type="file"
                fileTypes="image/*"
                onChange={this.handleImageChange.bind(this)}
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
                <PreviewAbout about={this.state} />
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
