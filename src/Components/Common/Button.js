import React from "react";

const Button = props => {
  return (
    <div className="clearfix">
      <a style={props.style} className={props.className? props.className :"btn btn-primary"} onClick={props.onClick}>
        {props.children}
      </a>
    </div>
  );
};

export { Button };
