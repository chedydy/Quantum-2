import React from "react";
import { connect } from "react-redux";
import { PostsPublicActions } from "../../Actions";
import "./CategoryBackButton.css";

let CategoryBackButton = ({ goBack, category }) => {
  return (
    <div className="categoryBackButton" onClick={() => goBack()}>
      Back ({category})
    </div>
  );
};

CategoryBackButton = connect(
  state => {
    return { category: state.PostsPublic.selectedCategory };
  },
  {
    goBack: PostsPublicActions.goBack
  }
)(CategoryBackButton);

export { CategoryBackButton };
