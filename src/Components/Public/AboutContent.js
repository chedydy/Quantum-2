import React from "react";
import ReactMarkdown from "react-markdown";
import {PageHeader} from "./PageHeader";
import {Container} from "../Common";
import './AboutContent.css';

const AboutContent = ({about}) => {
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
            About Simon Stewart Simon Stewart is the creator of WebDriver, the open source
            web application testing tool, as well as a core Selenium developer. WebDriver
            remains a hot topic as it is currently going through a W3C (World Wide Web
            Consortium) specification process, which Simon is a co-editor of. He describes
            himself as “undeniably hairy”, and holds a BSc in computer science from
            Nottingham University.
          </div>
          <hr/>
          <div>
            About Simon Stewart Simon Stewart is the creator of WebDriver, the open source
            web application testing tool, as well as a core Selenium developer. WebDriver
            remains a hot topic as it is currently going through a W3C (World Wide Web
            Consortium) specification process, which Simon is a co-editor of. He describes
            himself as “undeniably hairy”, and holds a BSc in computer science from
            Nottingham University.
          </div>
          <hr/>
          <div>
            About Simon Stewart Simon Stewart is the creator of WebDriver, the open source
            web application testing tool, as well as a core Selenium developer. WebDriver
            remains a hot topic as it is currently going through a W3C (World Wide Web
            Consortium) specification process, which Simon is a co-editor of. He describes
            himself as “undeniably hairy”, and holds a BSc in computer science from
            Nottingham University.
          </div>
          <hr/>
          <div>
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
