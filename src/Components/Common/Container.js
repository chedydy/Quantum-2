import React, { Component } from "react";
const Container = props => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-lg-8 col-md-10 mx-auto"
          style={props.alignItems?{ textAlign: "justify" }:{}}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

export { Container };
