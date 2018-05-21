import React, { Component } from "react";
import { connect } from "react-redux";
import { LinkButton } from "../../Common";
import { PostsItem } from "./PostsItem";
import { PostsActions } from "../../../Actions";
import "./PostItem.css";
import "./Posts.css";
class PostsClass extends Component {
  componentWillMount() {
    this.props.get();
  }
  renderPostsPreview() {
    const items = this.props.filteredPreviews.map((val, index) => {
      return (
        <div key={val.id}>
          <PostsItem postPreview={val} />
          <hr />
        </div>
      );
    });
    return items;
  }
  filter(filterText) {
    this.props.filter(filterText);
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
            <div
              className="col-4 text-left align-self-center header"
              onClick={() => this.props.sortBy("title")}
            >
              Title
            </div>
            <div
              className="col-2 text-left align-self-center header"
              onClick={() => this.props.sortBy("author")}
            >
              Author
            </div>
            <div
              className="col-2 text-left align-self-center header"
              onClick={() => this.props.sortBy("publishDate")}
            >
              Publish Date
            </div>
            <div className="col-3 text-left align-self-center search-header">
              <i className="fas fa-search" />
              <input
                className="search"
                placeholder="Search..."
                onChange={e => {
                  this.filter(e.target.value);
                }}
              />
            </div>
          </div>
          {this.renderPostsPreview()}
          <div className="row justify-content-center">
            <div className="col-3 offset-8 align-self-center">
              <div className="row">
                <LinkButton link={`/admin/posts/new`}>New Post</LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.Posts
  };
}
const Posts = connect(mapStateToProps, {
  get: PostsActions.get,
  filter: PostsActions.filter,
  sortBy: PostsActions.sortBy
})(PostsClass);

export { Posts };
