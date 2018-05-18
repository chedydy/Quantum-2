import React from "react";
import { connect } from "react-redux";
import { PostsPublicActions } from "../../Actions";
import "./CategoryBackButton.css";

let CategoryBackButton = ({ goBack }) => {
  return (
    <div className="categoryBackButton" onClick={() => goBack()}>
      Back
    </div>
  );
};

CategoryBackButton = connect(null, {
  goBack: PostsPublicActions.goBack
})(CategoryBackButton);

export { CategoryBackButton };
