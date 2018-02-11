import React from "react";
import { Link } from "react-router-dom";
import './Button.css';
const LinkButton = props => {
  return (
    <div className="clearfix">
      <Link className={`btn-round ${props.className? props.className :"btn btn-primary"}`} to={props.link}>
        {props.children}
      </Link>
    </div>
  );
};

export { LinkButton };
