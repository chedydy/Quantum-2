import React, { Component } from "react";
import logo from "../../img/quantumcivilisation.png";
import { Navigator,LinkItem } from "../Common";
const AdminNavigator = props => {
  return (
    <Navigator>
      <LinkItem text="Contacts" link="/" />
      <LinkItem text="Posts" link="/posts" />
    </Navigator>
  );
};

export {AdminNavigator};
