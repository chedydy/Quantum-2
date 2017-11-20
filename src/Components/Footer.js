import React, { Component } from "react";
import aboutImg from "../img/about-bg.jpg";
import FooterShareLink from "./FooterShareLink";
class Footer extends Component {
  componentWillMount() {}

  render() {
    const imgStyle = { width: "500px", height: "200px" };
    return (
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <ul class="list-inline text-center">
                <FooterShareLink provider="twitter" />
                <FooterShareLink provider="facebook" />
                <FooterShareLink provider="github" />
              </ul>
              <p class="copyright text-muted">
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
