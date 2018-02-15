import React, { Component } from "react";
import { Container, LinkButton, Textarea } from "../../Common";
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
            <br />
            <h4 className="row justify-content-center">{this.state.title}</h4>
            <br />
            <div className="row justify-content-center">{this.state.image}</div>
            <div className="col">
              <p>{this.state.content}</p>
            </div>
            <br />
            <div className="row justify-content-end col">
              <PreviewAbout about={this.state} />
              <LinkButton link="/admin/about/edit" className="fa fa-pencil-square-o fa-3x edit-button margin"></LinkButton>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export { About };
