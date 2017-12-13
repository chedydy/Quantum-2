import React from "react";
import { Link } from "react-router-dom";

const PostsItem = ({ postPreview }) => {
  return (
      <div className="row">
        <div class="col-6 text-left">{postPreview.title}</div>
        <div class="col-2 text-left">{postPreview.author}</div>
        <div class="col-2 text-left">{postPreview.publishDate}</div>
      </div>

  );
};

export { PostsItem };
