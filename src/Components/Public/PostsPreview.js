import React, { Component } from "react";
import PostsPreviewService from "../../Services/PostsPreviewService";
import { Link } from "react-router-dom";

class PostsPreview extends Component {
  state = {
    posts: []
  };

  componentWillMount() {
    PostsPreviewService.getPreviews()
      .then(posts => this.setState({ posts }))
      .catch(error => console.log(error));
  }

  renderPostsPreview() {
    const items = this.state.posts.map((val, index) => {
      return (
        <div key={val.id}>
          <div className="post-preview">
            <Link to={`/posts/${val.id}`}>
              <h2 className="post-title">{val.title}</h2>
              <h3 className="post-subtitle">{val.subTitle}</h3>
            </Link>
            <p className="post-meta">
              Posted by
              <Link to="posts">{val.author}</Link> on {val.publishDate}
            </p>
          </div>
          <hr />
        </div>
      );
    });
    return items;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            {this.renderPostsPreview()}
            <div className="clearfix">
              <a className="btn btn-secondary float-right" href="#">
                Older Posts &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { PostsPreview };
