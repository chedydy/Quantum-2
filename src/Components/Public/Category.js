import React, { Component } from "react";
import "./Category.css";
class Category extends Component {
  state = { expanded: false };
  render() {
    return (
      <div className="category-boss-container">
        <div
          style={{
            flexGrow: '0.5',
            flexShrink: "1",
            flexBasis: "0%"
          }}
        />
        <div
          className="category-mini-boss-container"
          style={{
            flexGrow: '9.5',
            flexShrink: "1",
            flexBasis: "0%"
          }}
        >
          <div
            onClick={() => {
              this.setState({ expanded: !this.state.expanded });
            }}
            className="category-container"
          >
            <div className="category-inline">
              <div className="expand-button">
                {this.state.expanded ? "-" : "+"}
              </div>
              <div className="category-text">{this.props.name}</div>
            </div>
          </div>
          {this.state.expanded ? this.props.children : ""}
        </div>
      </div>
    );
  }
}

export { Category };
