import React, { Component } from "react";
import _ from "lodash";
import { Container, Button } from "../Common";
import { PostPreviewService } from "../../Services";
import { PostsPreviewItem } from "./PostsPreviewItem";
import "./PostsPreview.css";

class PostsPreview extends Component {
  state = {
    posts: []
  };
  setPreviewsState(posts) {
    this.setState({ posts });
  }

  componentWillMount() {
    PostPreviewService.subscribePreviews(this.setPreviewsState.bind(this));
  }

  renderPostsPreview() {
    const items = this.state.posts.map((val, index) => {
      return <PostsPreviewItem postPreview={val} key={val.id} />;
    });
    return items;
  }

  render() {
    return (
      <Container>
        <div className="col-lg-8 col-md-10 mx-auto">
          {this.renderPostsPreview()}
          <Button style={{ color: "white" }}>Older Posts &rarr;</Button>
          <br />
        </div>
      </Container>
    );
  }
}

export { PostsPreview };
