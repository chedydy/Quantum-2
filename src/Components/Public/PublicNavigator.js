import React from "react";
import { NavLink, Navigator } from "../Common";
const PublicNavigator = props => {
  return (
    <Navigator>
      <NavLink text="Home" link="/" />
      <NavLink text="About" link="/about" />
      <NavLink text="Posts" link="/posts" />
      <NavLink text="Contact" link="/contact" />
    </Navigator>
  );
};

export {PublicNavigator};
