import React, { Component } from "react";
import { LinkButton } from "../../Common";
import { PostsItem } from "./PostsItem";
import { PostDetails } from "./PostDetails";
import { PostPreviewService, PostService } from "../../../Services";
class Posts extends Component {
  state = {
    // posts: []
    postPreviews: []
  };
  componentWillMount() {
    Promise.all([
      PostPreviewService.getPreviews()
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
        <div className="col-11">
          <div className="row justify-content-center">
            <div className="col-4 text-left align-self-center">Title</div>
            <div className="col-2 text-left align-self-center">Author</div>
            <div className="col-2 text-left align-self-center">
              Publish Date
            </div>
            <div className="col-3 text-left align-self-center">Actions</div>
          </div>
          {this.renderPostsPreview()}
          <div className="row justify-content-center">
            <div className="col-3 offset-8 align-self-center">
              <div className="row">
                <PostDetails />
                {/* <LinkButton link="/admin/posts/new">New Post</LinkButton> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Posts };
