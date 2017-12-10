import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { Container, Button, LinkButton } from "../../Common";
import aboutService from "../../../Services/AboutService";
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
        <Container>
          {this.state.title}
          {this.state.content}
          <div className="row">
            <Button>Preview</Button>
            <LinkButton link="/admin/about/edit">Edit</LinkButton>
          </div>
        </Container>
      </div>
    );
  }
}

export { About };
