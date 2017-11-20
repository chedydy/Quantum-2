import React, { Component } from "react";
class PageHeader extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentWillMount() {}

  render() {
    const imgStyle = { "background-image": this.props.image };
    return (
      <header className="masthead" style={imgStyle}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="page-heading">
                <h1>{this.props.title}</h1>
                <span className="subheading">{this.props.children}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default PageHeader;
