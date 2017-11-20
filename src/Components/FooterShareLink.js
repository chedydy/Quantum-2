import React, { Component } from "react";

class FooterShareLink extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentWillMount() {}

  render() {
    return (
      <li className="list-inline-item">
        <a href="#">
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x" />
            <i className={`fa fa-${this.props.provider} fa-stack-1x fa-inverse`} />
          </span>
        </a>
      </li>
    );
  }
}

export default FooterShareLink;
