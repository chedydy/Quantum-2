import React, {Component} from "react";
import ReactMarkdown from "react-markdown";
import { PageHeader } from "./PageHeader";
import { Container } from "../Common";
import contact1 from "../../img/blue_space_nebula.jpg";
import "./AboutContent.css";

class AboutContent extends Component {
  // state = {   visible: false };
  state ={
    display: false
  }
  onShow() {
    this.setState({display: !this.state.display});
  }
  render() {
    const {about} = this.props;
    return (
      <div className="myheader">
        <PageHeader image={about.imageUrl} title={"About Me"}>
          {about.title}
        </PageHeader>
        <Container>
          <div
            style={{
              textAlign: "justify"
            }}
          >
            <ReactMarkdown source={about.content} />
          </div>
          <br />
          <hr />
          <div className="text-aspect">
            <div>
              <div className="the-div">
                <div className="the-divs">
                  <h3 className="name-style">Victor Jivanescu</h3>
                  <div className="the-details-div" onClick={this.onShow.bind(this)}>
                    <i className="fas fa-caret-right" />
                    <span className="padding-arrow ">Show More</span>
                  </div>
                  <div style={{display: this.state.display? "block" : "none"}} className="rectangle" />
                </div>
                <div className="the-divs">
                  <img src={contact1} className="img-style" alt="logo" />
                </div>
              </div>
              About Simon Stewart Simon Stewart is the creator of WebDriver, the
              open source web application testing tool, as well as a core
              Selenium developer. WebDriver remains a hot topic as it is
              currently going through a W3C (World Wide Web Consortium)
              specification process, which Simon is a co-editor of. He describes
              himself as “undeniably hairy”, and holds a BSc in computer science
              from Nottingham University.
            </div>
            <br />
          </div>
        </Container>
      </div>
    );
  }
}

export { AboutContent };
