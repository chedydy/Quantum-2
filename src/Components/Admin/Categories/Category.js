import React, { Component } from "react";
import { connect } from "react-redux";
import { CategoriesActions } from "../../../Actions";
import "./Category.css";
class CategoryClass extends Component {
  state = {
    expanded: false
  };
  tagAndShowAlert() {
    this.props.tagCategory(this.props.parent, this.props.name);
    this.props.toggleAlert();
  }
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
            <div className="category-container-admin">
              <div className="category-inline">
                <div
                  className="category-button-wrapper"
                  onClick={() => {
                    this.setState({
                      expanded: !this.state.expanded
                    });
                  }}
                >
                  <div className="expand-button">
                    <i
                      className={`fa fa-${
                        this.state.expanded
                          ? "angle-double-down"
                          : "angle-double-right"
                      }`}
                    />
                  </div>
                  <div className="category-text">{this.props.name}</div>
                </div>
                <div
                  className="add-button"
                  onClick={() => {
                    this.props.new(this.props.parent);
                    this.setState({ expanded: true });
                  }}
                >
                  <i className={`fa fa-plus`} />
                </div>
                <div
                  className="add-button"
                  onClick={() => {
                    this.props.children
                      ? this.tagAndShowAlert()
                      : this.props.delete(this.props.parent, this.props.name);
                  }}
                >
                  <i className={`fa fa-ban`} />
                </div>
              </div>
            </div>
            {this.state.expanded ? this.props.children : ""}
          </div>
        </div>
      </div>
    );
  }
}

const Category = connect(null, {
  new: CategoriesActions.new,
  delete: CategoriesActions.delete,
  toggleAlert: CategoriesActions.toggleAlert,
  tagCategory: CategoriesActions.tagCategory
})(CategoryClass);

export { Category };
