import React, { Component } from "react";
import logo from "../../img/quantumcivilisation.png";
import { Navigator,LinkItem } from "../Common";
const AdminNavigator = props => {
  return (
    <Navigator>
      <LinkItem text="Contacts" link="/" />
      <LinkItem text="Posts" link="/posts" />
      <LinkItem text="About" link="/admin/about/"/>
    </Navigator>
  );
};

export {AdminNavigator};
