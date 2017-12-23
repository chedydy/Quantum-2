import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { PageHeader } from "./PageHeader";
import { Container } from "../Common";
const AboutContent = ({ about }) => {
  return (
    <div>
      <PageHeader image={about.imageUrl} title={"About Me"}>
        {about.title}
      </PageHeader>
      <Container>
        <div style={{ textAlign: "justify" }}>
          <ReactMarkdown source={about.content} />
        </div>
      </Container>
    </div>
  );
};

export { AboutContent };
