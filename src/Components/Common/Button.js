import React, { Component } from "react";
const Button = props => {
  return (
    <div className="clearfix">
      <a className="btn btn-primary" onClick={props.onClick}>
        {props.children}
      </a>
    </div>
  );
};

export { Button };
