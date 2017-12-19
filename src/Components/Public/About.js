import React, { Component } from "react";
import { AboutContent } from "./AboutContent";
import { AboutService } from "../../Services";
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
    AboutService.getAbout(this.setAbout.bind(this));
  }

  render() {
    return <AboutContent about={this.state} />;
  }
}

export { About };
