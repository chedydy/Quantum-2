import React from "react";
import { Link } from "react-router-dom";

const PostsPreviewItem = ({postPreview}) => {
  return (
    <div key={postPreview.id}>
      <div className="post-preview">
        <Link to={`/posts/${postPreview.id}`}>
          <h2 className="post-title">{postPreview.title}</h2>
          <h3 className="post-subtitle">{postPreview.subTitle}</h3>
        </Link>
        <p className="post-meta">
          Posted by
          <Link to="posts">{postPreview.author}</Link> on {postPreview.publishDate}
        </p>
      </div>
      <hr />
    </div>
  );
};

export { PostsPreviewItem };
