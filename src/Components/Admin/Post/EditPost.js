import React, { Component } from "react";
import _ from "lodash";
import {
  Input,
  Textarea,
  FileInput,
  Container,
  SubmitButton,
  Modal,
  SelectInput
} from "../../Common";
import { PostContent } from "../../Public";
import {
  PostPreviewService,
  PostService,
  CategoriesService
} from "../../../Services";
import "./EditPost.css";

class EditPost extends Component {
  state = {
    post: {
      content: ""
    },
    preview: {
      title: "",
      subTitle: "",
      tags: "",
      category: ""
    },
    categories: []
  };

  componentWillMount() {
    var id = this.props.match.params.id;
    CategoriesService.subscribe(this.setCategoriesState.bind(this));
    Promise.all([
      PostPreviewService.getPreview(id),
      PostService.getPost(id)
    ]).then(values => {
      let tags = "";
      _.forEach(values[0].tags, (val, key) => {
        tags = `${tags} ${val}`;
      });
      tags = tags.trim();
      this.setState({
        preview: { ...values[0], tags },
        post: values[1],
        tagsArray: values[0].tags
      });
    });
  }

  setCategoriesState(categories) {
    this.setState({ categories });
  }

  handleSubmit = e => {
    e.preventDefault();
    Promise.all([
      PostPreviewService.updatePreview({
        ...this.state.preview,
        tags: this.state.tagsArray
      }),
      PostService.updatePost(this.state.post),
      CategoriesService.update(
        this.state.preview.category,
        this.state.preview.id
      )
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

  handleTagsChange = e => {
    const value = e.target.value;
    const tags = value.split(" ");
    const newState = {
      ...this.state,
      preview: {
        ...this.state.preview,
        tags: value
      },
      tagsArray: _.mapKeys(tags)
    };
    this.setState(newState);
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
            <form onSubmit={this.handleSubmit.bind(this)}>
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
                onChange={this.handleTagsChange.bind(this)}
              />
              <SelectInput
                id="category"
                placeholder="Category"
                label="Category"
                value={this.state.preview.category}
                options={this.state.categories}
                onChange={this.handlePreviewChange.bind(this, "category")}
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
                <SubmitButton className="fa fa-floppy-o fa-3x save-button" />
              </div>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export { EditPost };
