import React from "react";
import { LinkItem, Navigator } from "../Common";
const PublicNavigator = props => {
  return (
    <Navigator>
      <LinkItem text="Home" link="/" />
      <LinkItem text="About" link="/about" />
      <LinkItem text="Posts" link="/posts" />
      <LinkItem text="Contact" link="/contact" />
    </Navigator>
  );
};

export {PublicNavigator};