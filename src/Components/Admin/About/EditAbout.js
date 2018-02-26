import React, { Component } from "react";
import {
  Input,
  Textarea,
  FileInput,
  Container,
  SubmitButton
} from "../../Common";
import { PreviewAbout } from "./PreviewAbout";
import { AboutService } from "../../../Services";
class EditAbout extends Component {
  state = {
    title: "",
    content: "",
    image: "",
    imageUrl: ""
  };
  setAbout(about) {
    this.setState({
      title: about.title,
      content: about.content,
      imageUrl: about.imageUrl
    });
  }
  componentWillMount() {
    AboutService.getAbout(this.setAbout.bind(this));
  }

  handleSubmit = e => {
    // e.preventDefault();
    AboutService.setAbout({ ...this.state }).then(() => {
      this.props.history.push("/admin/about");
    });
  };

  handleChange = (field, e) => {
    this.setState({ ...this.state, [field]: e.target.value });
  };

  handleImageChange = e => {
    // e.preventDefault();
    let reader = new FileReader();
    let image = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        ...this.state,
        image,
        imageUrl: reader.result
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
                <SubmitButton className="fa fa-floppy-o fa-3x preview-button margin"></SubmitButton>
              </div>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export { EditAbout };
