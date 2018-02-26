import React, { Component } from "react";
import { AboutContent } from "./AboutContent";
import { AboutService } from "../../Services";

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
    return <AboutContent about={this.state} />;
  }
}

export { About };
