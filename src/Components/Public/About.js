import React, { Component } from "react";
import { AboutContent } from "./AboutContent";
import aboutService from "../../Services/AboutService";
import aboutImg from "../../img/about-bg.jpg";
class About extends Component {
  state = {
    title: "",
    content: "",
    image: aboutImg
  };
  setAbout(about) {
    this.setState({
      title: about.title,
      content: about.content,
      image: aboutImg
    });
  }
  componentWillMount() {
    aboutService.getAbout(this.setAbout.bind(this));
  }

  render() {
    return <AboutContent about={this.state} />;
  }
}

export { About };
