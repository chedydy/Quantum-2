import React, { Component } from "react";
import { Link } from "react-router-dom";
const LinkItem = props => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={props.link}>
        {props.text}
      </Link>
    </li>
  );
};

export { LinkItem };
