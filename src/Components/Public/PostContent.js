import React from "react";
import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";

const PostContent = ({ preview, post }) => {
  return (
    <div>
      <PostHeader
        image={post.imageUrl}
        title={preview.title}
        subtitle={preview.subTitle}
        author={preview.author}
        authorLink={preview.authorLink}
        publishDate={preview.publishDate}
      />
      <article>
        <div className="container">
          <div style={{ textAlign: "justify" }}>
            <ReactMarkdown source={post.content} />
          </div>
        </div>
      </article>
    </div>
  );
};

export { PostContent };
