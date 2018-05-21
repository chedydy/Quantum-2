import React, { Component } from "react";
import { Container, Button } from "../Common";
import { PostPreviewService } from "../../Services";
import { PostsPreviewItem } from "./PostsPreviewItem";
import "./PostsPreview.css";

class PostsPreview extends Component {
  state = {
    posts: [],
    postsNr: 5
  };
  setPreviewsState(posts) {
    this.setState({ posts });
  }

  componentWillMount() {
    PostPreviewService.getPreviewsLimitTo(this.state.postsNr).then(posts =>
      this.setPreviewsState(posts)
    );
  }
  increasePostsLimit() {
    PostPreviewService.getPreviewsLimitTo(this.state.postsNr + 5).then(posts =>
      this.setPreviewsState(posts)
    );
    this.setState({ postsNr: this.state.postsNr + 5 });
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
          <Button
            style={{ color: "white" }}
            onClick={this.increasePostsLimit.bind(this)}
          >
            Older Posts &rarr;
          </Button>
          <br />
        </div>
      </Container>
    );
  }
}

export { PostsPreview };
