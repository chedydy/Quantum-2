import React from "react";

const PageHeader = props => {
  return (
    <header className="masthead" style={{ backgroundImage: props.image }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="page-heading">
              <h1>{props.title}</h1>
              <span className="subheading">{props.children}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { PageHeader };
