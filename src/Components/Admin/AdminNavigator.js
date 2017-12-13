import React from "react";
import { Navigator,LinkItem } from "../Common";
const AdminNavigator = props => {
  return (
    <Navigator>
      <LinkItem text="Posts" link="/admin/posts/" />
      <LinkItem text="About" link="/admin/about/"/>
      <LinkItem text="Contact requests" link="/admin/contactrequests/" />
    </Navigator>
  );
};

export {AdminNavigator};
