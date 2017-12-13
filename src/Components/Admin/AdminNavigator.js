import React from "react";
import { Navigator,LinkItem } from "../Common";
const AdminNavigator = props => {
  return (
    <Navigator>
      <LinkItem text="Contacts" link="/" />
      <LinkItem text="Posts" link="/admin/posts/" />
      <LinkItem text="About" link="/admin/about/"/>
    </Navigator>
  );
};

export {AdminNavigator};
