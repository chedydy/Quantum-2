import React, { Component } from "react";
class PostHeader extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentWillMount() {}

  render() {
    const imgStyle = { "background-image": this.props.image };
    return (
      <header className="masthead" style={imgStyle}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="post-heading">
                <h1>{this.props.title}</h1>
                <h2 className="subheading">{this.props.subtitle}</h2>
                <span className="meta">
                  Posted by <a href="#">{this.props.author}</a> on {this.props.publishDate}
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
