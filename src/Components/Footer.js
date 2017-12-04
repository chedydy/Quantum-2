import React, { Component } from "react";
import FooterShareLink from "./FooterShareLink";
class Footer extends Component {
  componentWillMount() {}

  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <ul className="list-inline text-center">
                <FooterShareLink provider="twitter" />
                <FooterShareLink provider="facebook" />
                <FooterShareLink provider="github" />
              </ul>
              <p className="copyright text-muted">
                Copyright &copy; Your Website 2017
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
