import React from "react";
import { Container } from "../Common";
import PostHeader from "./PostHeader";
import postImg from "../../img/post-bg.jpg";
import ReactMarkdown from "react-markdown";

const PostContent = ({ preview, post }) => {
  return (
    <div>
      <PostHeader
        image={post.imageUrl}
        title={preview.title}
        subtitle={preview.subTitle}
        author={preview.author}
        publishDate={preview.publishDate}
      />
      <article>
        <Container>
          <ReactMarkdown source={post.content} />
        </Container>
      </article>
    </div>
  );
};

export { PostContent };
