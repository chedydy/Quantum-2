import React, { Component } from "react";
class PostHeader extends Component {
  componentWillMount() {}

  render() {
    const imgStyle = { backgroundImage: `url(${this.props.image})` };
    return (
      <header className="masthead" style={imgStyle}>
        <div className="container">
          <div className="row">
            <div className="mx-auto">
              <div className="post-heading">
                <h1>{this.props.title}</h1>
                <h2 className="subheading">{this.props.subtitle}</h2>
                <span className="meta">
                  Posted by <a href="#">{this.props.author}</a> on{" "}
                  {this.props.publishDate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default PostHeader;
