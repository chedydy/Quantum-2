import React, { Component } from "react";
import { Container, Button } from "../Common";
import { PostPreviewService } from "../../Services";
import { PostsPreviewItem } from "./PostsPreviewItem";

class PostsPreview extends Component {
  state = {
    posts: []
  };
  setPreviesState(posts) {
    this.setState({ posts });
  }
  componentWillMount() {
    PostPreviewService.subscribePreviews(this.setPreviesState.bind(this));
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
          <Button>Older Posts &rarr;</Button>
        </div>
      </Container>
    );
  }
}

export { PostsPreview };
