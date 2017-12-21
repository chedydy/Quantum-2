import React, { Component } from "react";
import {
  Input,
  Textarea,
  FileInput,
  Container,
  SubmitButton,
  Button,
  Modal
} from "../../Common";
import { DeleteButton } from "../../Common/DeleteButton";
import { PostContent } from "../../Public";
import { PostPreviewService, PostService } from "../../../Services";
import "./EditPost.css";

class EditPost extends Component {
  state = {
    post: {
      content: ""
    },
    preview: {
      title: "",
      subTitle: "",
      tags: ""
      // image: "",
      // imagePreviewUrl: ""
    }
  };

  componentWillMount() {
    var id = this.props.match.params.id;
    Promise.all([
      PostPreviewService.getPreview(id),
      PostService.getPost(id)
    ]).then(values => {
      this.setState({ preview: values[0], post: values[1] });
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    //    const image = e.target.elements.image.files[0];
    Promise.all([
      PostPreviewService.updatePreview(this.state.preview),
      PostService.updatePost(this.state.post)
    ])
      .then(() => {
        this.props.history.push("/admin/posts/");
      })
      .catch(console.log);
  };

  handlePreviewChange = (field, e) => {
    this.setState({
      ...this.state,
      preview: {
        ...this.state.preview,
        [field]: e.target.value
      }
    });
  };

  handlePostChange = (field, e) => {
    this.setState({
      ...this.state,
      post: {
        ...this.state.post,
        [field]: e.target.value
      }
    });
  };

  handleImageChange = e => {
    e.preventDefault();
    let reader = new FileReader();
    let image = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        ...this.state,
        post: {
          ...this.state.post,
          image: image,
          imageUrl: reader.result
        }
      });
    };
    reader.readAsDataURL(image);
  };

  render() {
    return (
      <div>
        <Container>
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <Input
                id="title"
                placeholder="Title"
                label="Title"
                type="text"
                value={this.state.preview.title}
                onChange={this.handlePreviewChange.bind(this, "title")}
              />
              <Input
                id="subTitle"
                placeholder="Subtitle"
                label="Subtitle"
                type="text"
                value={this.state.preview.subTitle}
                onChange={this.handlePreviewChange.bind(this, "subTitle")}
              />
              <Input
                id="tags"
                placeholder="Tags"
                label="Tags"
                type="text"
                value={this.state.preview.tags}
                onChange={this.handlePreviewChange.bind(this, "tags")}
              />
              {/* <img src={this.state.preview.imagePreviewUrl} alt="Selected" />*/}
              <FileInput
                id="image"
                placeholder="Select image"
                label="Image"
                type="file"
                fileTypes="image/*"
                onChange={this.handleImageChange.bind(this)}
              /> 
              <Input
                id="tags"
                placeholder="Tags"
                label="Tags"
                type="text"
                value={this.state.preview.tags}
                onChange={this.handlePreviewChange.bind(this, "imageUrl")}
              />
              <Textarea
                id="content"
                placeholder="Content"
                label="Content"
                rows="10"
                value={this.state.post.content}
                onChange={this.handlePostChange.bind(this, "content")}
              />
              <br />
              <div className="row justify-content-end col">
                <Modal
                  title="Preview Post"
                  appElement="#root"
                  className="fa fa-eye fa-3x save-button margin"
                >
                  <PostContent
                    post={this.state.post}
                    preview={this.state.preview}
                  />
                </Modal>
                <SubmitButton className="fa fa-floppy-o fa-3x save-button"></SubmitButton>
              </div>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export { EditPost };
