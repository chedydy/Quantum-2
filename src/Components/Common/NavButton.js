import React from "react";
import { Link } from "react-router-dom";
const NavButton = props => {
  return (
    <li className="nav-item">
      <a
        className="nav-link"
        style={{ cursor: "pointer" }}
        onClick={props.onClickHandler}
      >
        {props.text}
      </a>
    </li>
  );
};

export { NavButton };
