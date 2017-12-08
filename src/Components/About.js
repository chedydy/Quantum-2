import React, { Component } from "react";
import {PageHeader} from "./Public/PageHeader";
import aboutImg from "../img/about-bg.jpg";
class About extends Component {
  componentWillMount() {}

  render() {
    return (
      <div>
        <PageHeader image={aboutImg} title={"About Me"}>
          This is what I do.
        </PageHeader>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
                nostrum ullam eveniet pariatur voluptates odit, fuga atque ea
                nobis sit soluta odio, adipisci quas excepturi maxime quae totam
                ducimus consectetur?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                praesentium recusandae illo eaque architecto error, repellendus
                iusto reprehenderit, doloribus, minus sunt. Numquam at quae
                voluptatum in officia voluptas voluptatibus, minus!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum molestiae debitis nobis, quod sapiente qui voluptatum,
                placeat magni repudiandae accusantium fugit quas labore non
                rerum possimus, corrupti enim modi! Et.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
