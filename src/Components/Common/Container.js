import React, { Component } from "react";
const Container = props => {
  return (
    <div className="container">
      <div className="row">
          {props.children}
      </div>
    </div>
  );
};

export { Container };
