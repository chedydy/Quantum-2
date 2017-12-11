import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { PageHeader } from "./PageHeader";
import { Container } from "../Common";
import aboutService from "../../Services/AboutService";
import aboutImg from "../../img/about-bg.jpg";
class About extends Component {
  state = {
    title: "",
    content: ""
  };
  componentWillMount() {
    aboutService
      .getAbout()
      .then(about => {
        this.setState({
          title: about.title,
          content: about.content
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <PageHeader image={aboutImg} title={"About Me"}>
          {this.state.title}
        </PageHeader>
        <Container>
          <ReactMarkdown source={this.state.content} />
        </Container>
      </div>
    );
  }
}

export { About };
