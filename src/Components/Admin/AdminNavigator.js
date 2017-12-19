import React from "react";
import { withRouter } from "react-router-dom";
import { Navigator, NavLink, NavButton } from "../Common";
import {AuthService} from "../../Services";

class AdminNav extends React.Component {
  redirectToLogin() {
    this.props.history.push("/admin/about");
  }
  logout() {
    AuthService.logout().then(() => {
      this.redirectToLogin();
    });
  }
  render() {
    return (
      <Navigator>
        <NavLink text="Posts" link="/admin/posts/" />
        <NavLink text="About" link="/admin/about/" />
        <NavLink text="Contact requests" link="/admin/contactrequests/" />
        <NavButton text="Logout" onClickHandler={this.logout.bind(this)} />
      </Navigator>
    );
  }
}
const AdminNavigator = withRouter(AdminNav);
export { AdminNavigator };
