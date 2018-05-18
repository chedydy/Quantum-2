import React from "react";
import { connect } from "react-redux";
import { PostsPublicActions } from "../../Actions";
import "./SubCategory.css";

let SubCategory = ({ name, selectSubCategory }) => {
  return (
    <div
      className="subCategory"
      onClick={() => {
        selectSubCategory(name);
      }}
    >
      {name}
    </div>
  );
};

SubCategory = connect(null, {
  selectSubCategory: PostsPublicActions.selectSubCategory
})(SubCategory);

export { SubCategory };
