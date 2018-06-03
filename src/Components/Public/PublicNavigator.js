import React from "react";
import { Navigator } from "../Common";
import { Link } from "react-router-dom";
const PublicNavigator = props => {
  return (
    <Navigator>
      <Link className="nav-link grow" to="/">
        Home
      </Link>
      <Link className="nav-link grow" to="/about">
        About
      </Link>
      <Link className="nav-link grow" to="/posts">
        Posts
      </Link>
      <Link className="nav-link grow" to="/contact">
        Contact
      </Link>
    </Navigator>
  );
};

export { PublicNavigator };
