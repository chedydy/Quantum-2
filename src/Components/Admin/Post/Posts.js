import React, { Component } from "react";
import { Container } from "../../Common";
import { PostsItem } from "./PostsItem";
import PostsService from "../../../Services/PostsService";
import PostsPreviewService from "../../../Services/PostsPreviewService";
class Posts extends Component {
  state = {
    // posts: []
    postPreviews: []
  };
  componentWillMount() {
    var id = this.props.match.params.id;
    Promise.all([
      PostsPreviewService.getPreviews()
      //   PostsService.getPost(id)
    ]).then(values => {
      this.setState({
        postPreviews: values[0]
        //  posts: values[0]
      });
    });
  }
  renderPostsPreview() {
    const items = this.state.postPreviews.map((val, index) => {
      return <PostsItem postPreview={val} key={val.id} />;
    });
    return items;
  }
  render() {
    return (
      <div className="row justify-content-center align-items-center">
        <div className="col-10">
          <div className="row">
            <div class="col-6 text-left">Title</div>
            <div class="col-2 text-left">Author</div>
            <div class="col-2 text-left">Publish Date</div>
          </div>
          {this.renderPostsPreview()}
        </div>
      </div>
    );
  }
}

export { Posts };
