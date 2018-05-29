import React from "react";
import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";
import "./PostContent.css";
const PostContent = ({ preview, post }) => {
  return (
    <div className="postContent">
      <PostHeader
        image={post.imageUrl}
        title={preview.title}
        subtitle={preview.subTitle}
        author={preview.author}
        authorLink={preview.authorLink}
        publishDate={preview.publishDate}
      />
      <div className="postContent-container">
          <div className="postContent-content">
            <ReactMarkdown source={post.content} />
          </div>
      </div>
    </div>
  );
};

export { PostContent };
