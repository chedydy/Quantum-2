import React from "react";
import "./FooterShareLink.css";

const FooterShareLink = props => {
  return (
    <li className="list-inline-item">
      <a href={props.link} target="_blank">
        <span className="fa-stack fa-lg color-button">
          <i className="fa fa-circle fa-stack-2x" />
          <i
            className={`fab fa-${props.provider} fa-stack-1x fa-inverse`}
          />
        </span>
      </a>
    </li>
  );
};

export { FooterShareLink };
