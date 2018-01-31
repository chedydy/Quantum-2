import React from "react";

const FooterShareLink = props => {
  return (
    <li className="list-inline-item">
      <a href={props.link} target="_blank">
        <span className="fa-stack fa-lg">
          <i className="fa fa-circle fa-stack-2x" />
          <i
            className={`fa fa-${props.provider} fa-stack-1x fa-inverse`}
          />
        </span>
      </a>
    </li>
  );
};

export { FooterShareLink };
