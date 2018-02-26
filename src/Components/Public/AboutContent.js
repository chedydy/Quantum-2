import React from "react";
import ReactMarkdown from "react-markdown";
import {PageHeader} from "./PageHeader";
import {Container} from "../Common";
import contact1 from "../../img/blue_space_nebula.jpg";
import AboutCSS from "./AboutContent.css";

const AboutContent = ({about}) => {
  // state = {   visible: false };

  return (
    <div>
      <PageHeader image={about.imageUrl} title={"About Me"}>
        {about.title}
      </PageHeader>
      <Container>
        <div style={{
          textAlign: "justify"
        }}>
          <ReactMarkdown source={about.content}/>
        </div>
        <br/>
        <hr/>
        <div className="text-aspect">
          <div>
            <div className="the-div">
              <div className="the-divs">
                <h3 className="name-style">Victor Jivanescu</h3>
                <div className="the-details-div">
                  <i className="fas fa-caret-right"></i>
                  <span className="padding-arrow ">Show More</span>
                </div>
                {// <div className="rectangle"></div>
              }
              </div>
              <div className="the-divs">
                <img src={contact1} className="img-style" alt="logo"/>
              </div>
            </div>
            About Simon Stewart Simon Stewart is the creator of WebDriver, the open source
            web application testing tool, as well as a core Selenium developer. WebDriver
            remains a hot topic as it is currently going through a W3C (World Wide Web
            Consortium) specification process, which Simon is a co-editor of. He describes
            himself as “undeniably hairy”, and holds a BSc in computer science from
            Nottingham University.
          </div>
          <br/>
        </div>
      </Container>
    </div>
  );
};

export {AboutContent};
