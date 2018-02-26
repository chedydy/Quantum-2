import React, { Component } from "react";
import "./Category.css";
class Category extends Component {
  state = {
    expanded: false
  };
  render() {
    return (
      <div className="category-entire-boss-container">
        <div className="category-boss-container">
          <div
            style={{
              flexGrow: this.props.isFirst ? "0" : "0.5",
              flexShrink: "1",
              flexBasis: "0%"
            }}
          />
          <div
            className="category-mini-boss-container"
            style={{
              flexGrow: this.props.isFirst ? "1" : "9.5",
              flexShrink: "1",
              flexBasis: "0%",
              paddingLeft: this.props.isFirst ? 0 : 21
            }}
          >
            <div
              onClick={() => {
                this.setState({
                  expanded: !this.state.expanded
                });
              }}
              className="category-container"
            >
              <div className="category-inline">
                <div className="expand-button">
                  <i
                    className={`fa fa-${
                      this.state.expanded ? "minus" : "plus"
                    }`}
                  />
                </div>
                <div className="category-text">{this.props.name}</div>
              </div>
            </div>
            {this.state.expanded ? this.props.children : ""}
          </div>
        </div>
      </div>
    );
  }
}

export { Category };
