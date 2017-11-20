import React, { Component } from "react";

class LinkItem extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentWillMount() {}

  render() {
    return (
      <li className="nav-item">
        <a className="nav-link" href={this.props.link}>
          {this.props.text}
        </a>
      </li>
    );
  }
}

export default LinkItem;
