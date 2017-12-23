import React, { Component } from "react";
import { Container, Button, LinkButton, Textarea } from "../../Common";
import { PreviewAbout } from "./PreviewAbout";
import {AboutService} from "../../../Services";

class About extends Component {
  state = {
    title: "",
    content: "",
    image: ""
  };
  setAbout(about) {
    this.setState({
      ...about
    });
  }
  componentWillMount() {
    AboutService.getAbout(this.setAbout.bind(this));
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
              <PreviewAbout about={this.state} />
              <LinkButton link="/admin/about/edit">Edit</LinkButton>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export { About };
