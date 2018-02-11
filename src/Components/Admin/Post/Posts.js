import React, { Component } from "react";
import { LinkButton } from "../../Common";
import { PostsItem } from "./PostsItem";
import { PostDetails } from "./PostDetails";
import { PostPreviewService } from "../../../Services";
import "./PostItem.css";
class Posts extends Component {
  state = {
    postPreviews: []
  };
  setPreviesState(postPreviews) {
    this.setState({ postPreviews });
  }
  componentWillMount() {
    PostPreviewService.subscribePreviews(this.setPreviesState.bind(this));
  }
  renderPostsPreview() {
    const items = this.state.postPreviews.map((val, index) => {
      if (val.id) {
        return (
          <div key={val.id}>
            <PostsItem postPreview={val} />
            <hr />
          </div>
        );
      }
    });
    return items;
  }
  render() {
    return (
      <div className="row justify-content-center align-items-center">
        <div className="col-11">
          <div
            className="row justify-content-center"
            style={{
              marginBottom: "30px",
              marginTop: "30px",
              fontWeight: "bold",
              fontSize: "25px",
              border: "2px solid #0085A1"
            }}
          >
            <div className="col-4 text-left align-self-center">Title</div>
            <div className="col-2 text-left align-self-center">Author</div>
            <div className="col-2 text-left align-self-center">
              Publish Date
            </div>
            <div className="col-3 text-left align-self-center" />
          </div>
          {this.renderPostsPreview()}
          <div className="row justify-content-center">
            <div className="col-3 offset-8 align-self-center">
              <div className="row">
                <LinkButton link={`/admin/posts/new`} >
                  New Post
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Posts };
