import React, { Component } from "react";
import { Container, Button, LinkButton, Textarea } from "../../Common";
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
          <div className="col">
            <div className="row justify-content-center">{this.state.title}</div>
            <div className="row justify-content-center">{this.state.image}</div>
            <div className="col">
              <Textarea rows="10" value={this.state.content} readOnly={true} />
            </div>
            <div className="row justify-content-end col">
              <Button>Preview</Button>
              <LinkButton link="/admin/about/edit">Edit</LinkButton>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export { About };
