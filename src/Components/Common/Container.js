import React from "react";
const Container = props => {
  return (
    <div className="container">
      <div className=" justify-content-center">
          {props.children}
      </div>
    </div>
  );
};

export { Container };
