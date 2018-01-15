import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./PostTitle.css";
class PostTitle extends Component {
  render() {
    return (
      <div className="title-boss-container">
        <div
          style={{
            flexGrow: '0.5',
            flexShrink: "1",
            flexBasis: "0%"
          }}
        />
        <div
          className="title-mini-boss-container"
          style={{
            flexGrow: '9.5',
            flexShrink: "1",
            flexBasis: "0%"
          }}
        >
          <div
            onClick={() => {
              this.props.history.push(`/posts/${this.props.id}`);
            }}
            className="title-container"
          >
            <div className="title-inline">
              <div className="title-text">{this.props.title}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Title = withRouter(PostTitle);
export { Title };
