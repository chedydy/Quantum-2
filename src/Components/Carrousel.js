import React, { Component } from "react";
import aboutImg from "../img/about-bg.jpg";
import LinkItem from "./LinkItem";
class Carrousel extends Component {
  componentWillMount() {}

  render() {
    return (
        <header  className="masthead" >
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block img-fluid" src={aboutImg} alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src={aboutImg} alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src={aboutImg} alt="Third slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </header>
    );
  }
}

export default Carrousel;
