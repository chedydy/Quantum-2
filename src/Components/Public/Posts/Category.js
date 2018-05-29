import React from "react";
import { connect } from "react-redux";
import { PostsPublicActions } from "../../../Actions";
import "./Category.css";

let Category = ({ name, selectCategory }) => {
  return (
    <div className="category" onClick={() => selectCategory(name)}>
      {name}
    </div>
  );
};

Category = connect(null, {
  selectCategory: PostsPublicActions.selectCategory
})(Category);

export { Category };
