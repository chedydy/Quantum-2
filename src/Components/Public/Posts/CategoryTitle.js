import React from "react";
import { connect } from "react-redux";
import { PostsPublicActions } from "../../../Actions";
import "./CategoryTitle.css";

let CategoryTitle = ({ selected, showCategories, back, toggleCategories }) => {
  return (
    <div
      className="categoryTitle"
      onClick={() => toggleCategories(!showCategories)}
    >
      Categories
      <button
        className={`categoryTitle-dropdown-button fas fa-caret-${
          showCategories ? "left" : "down"
        }`}
      />
    </div>
  );
};

CategoryTitle = connect(
  state => {
    return {
      selected: state.Categories.selected,
      showCategories: state.PostsPublic.showCategories
    };
  },
  {
    back: PostsPublicActions.goBack,
    toggleCategories: PostsPublicActions.toggleCategories
  }
)(CategoryTitle);

export { CategoryTitle };
