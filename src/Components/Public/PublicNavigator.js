import React from "react";
import {NavLink, Navigator} from "../Common";
import {Link} from "react-router-dom";
const PublicNavigator = props => {
  return (
    <Navigator>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>
      <Link className="nav-link" to="/posts">
        Posts
      </Link>
      <Link className="nav-link" to="/contact">
        Contact
      </Link>
    </Navigator>
  );
};

export {PublicNavigator};
