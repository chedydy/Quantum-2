import React, { Component } from "react";
import { Link } from "react-router-dom";
const LinkButton = props => {
  return (
    <div className="clearfix">
      <Link className="btn btn-secondary" to={props.link}>
        {props.children}
      </Link>
    </div>
  );
};

export { LinkButton };
