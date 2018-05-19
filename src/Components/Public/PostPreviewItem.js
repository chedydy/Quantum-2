import React from "react";
import { Link } from "react-router-dom";
import "./PostPreviewItem.css";
const PostPreviewItem = ({ post }) => {
  return (
    <div className="post_box col-xs-6 col-md-4">
      <div className="post_inner">
        <h2 className="post_title">
          {post.title.length > 35
            ? post.title.slice(0, 30) + "..."
            : post.title}
        </h2>
        <div className="post_excerpt">
          <p>{post.subTitle}</p>
        </div>
        <div className="post_more">
          <Link to={`/posts/${post.id}`}>
            <h4>Read More...</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};
export { PostPreviewItem };
