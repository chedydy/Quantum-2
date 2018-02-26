import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Navigator } from "../Common";
import { AuthService } from "../../Services";

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
        <Link className="nav-link" to="/admin/posts/">
          Posts
        </Link>
        <Link className="nav-link" to="/admin/categories/">
          Categories
        </Link>
        <Link className="nav-link" to="/admin/about/">
          About
        </Link>
        <Link className="nav-link" to="/admin/contactrequests/">
          Contact requests
        </Link>
        <a
          className="nav-link"
          style={{ cursor: "pointer" }}
          onClick={this.logout.bind(this)}
        >
          Logout
        </a>
      </Navigator>
    );
  }
}
const AdminNavigator = withRouter(AdminNav);
export { AdminNavigator };
