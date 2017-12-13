import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Common";

const PostsItem = ({ postPreview }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-6 text-left align-self-center">{postPreview.title}</div>
      <div className="col-2 text-left align-self-center">{postPreview.author}</div>
      <div className="col-2 text-left align-self-center">{postPreview.publishDate}</div>
      <div className="col-1">
        <Button>Preview</Button>
      </div>
    </div>
  );
};

export { PostsItem };
