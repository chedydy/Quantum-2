import React, { Component } from "react";
import {Link} from 'react-router-dom';
class LinkItem extends Component {
 
  componentWillMount() {}

  render() {
    return (
      <li className="nav-item">
        <Link className="nav-link" to={this.props.link}>
          {this.props.text}
        </Link>
      </li>
    );
  }
}

export default LinkItem;
