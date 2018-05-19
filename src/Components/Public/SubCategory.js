import React from "react";
import { connect } from "react-redux";
import { PostsPublicActions } from "../../Actions";
import "./SubCategory.css";

let SubCategory = ({ name, selectSubCategory, selectedSubCategory }) => {
  return (
    <div
      className={`subCategory ${
        selectedSubCategory === name ? "selected" : ""
      }`}
      onClick={() => {
        selectSubCategory(name);
      }}
    >
      {name}
    </div>
  );
};

SubCategory = connect(
  state => {
    return { selectedSubCategory: state.PostsPublic.selectedSubCategory };
  },
  {
    selectSubCategory: PostsPublicActions.selectSubCategory
  }
)(SubCategory);

export { SubCategory };
