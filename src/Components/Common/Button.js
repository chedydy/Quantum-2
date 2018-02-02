import React from "react";
import './Button.css';

const Button = props => {
  return (
    <div className="clearfix">
      <a style={props.style} className={`btn-round ${props.className? props.className :"btn btn-primary"}`} onClick={props.onClick}>
        {props.children}
      </a>
    </div>
  );
};

export { Button };
