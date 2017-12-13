import React from "react";
import { Link } from "react-router-dom";

const PostsItem = ({ postPreview }) => {
  return (

      <div className="row">
        <div class="col align-self-start">{postPreview.title}</div>
        <div class="col align-self-center">{postPreview.author}</div>
        <div class="col align-self-end">{postPreview.publishDate}</div>
      </div>

  );
};

export { PostsItem };
