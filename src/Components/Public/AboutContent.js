import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { PageHeader } from "./PageHeader";
import { Container } from "../Common";
const AboutContent = ({ about }) => {
  return (
    <div>
      <PageHeader image={about.image} title={"About Me"}>
        {about.title}
      </PageHeader>
      <Container>
        <ReactMarkdown source={about.content} />
      </Container>
    </div>
  );
};

export { AboutContent };
