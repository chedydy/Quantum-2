import React, { Component } from "react";
import { Container } from "../Common";
import PostHeader from "./PostHeader";
import postImg from "../../img/post-bg.jpg";
import PostsService from "../../Services/PostsService";
import PostsPreviewService from "../../Services/PostsPreviewService";
import ReactMarkdown from "react-markdown";
class Post extends Component {
  state = {
    post: {
      content: ""
    },
    preview: {
      id: "",
      title: "",
      subTitle: "",
      author: "",
      publishDate: "",
      authorLink: "",
      imageLink: ""
    }
  };
  componentWillMount() {
    var id = this.props.match.params.id;
    Promise.all([
      PostsPreviewService.getPreview(id),
      PostsService.getPost(id)
    ]).then(values => {
      this.setState({ preview: values[0], post: values[1] });
    });
  }

  render() {
    return (
      <div>
        <PostHeader
          image={postImg}
          title={this.state.preview.title}
          subtitle={this.state.preview.subTitle}
          author={this.state.preview.author}
          publishDate={this.state.preview.publishDate}
        />
        <article>
          <Container>
            <ReactMarkdown source={this.state.post.content} />
          </Container>
        </article>
      </div>
    );
  }
}

export { Post };
