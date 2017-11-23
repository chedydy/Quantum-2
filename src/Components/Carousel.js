import React, { Component } from "react";
import aboutImg from "../img/about-bg.jpg";
import contactImg from "../img/contact-bg.jpg";
import homeImg from "../img/home-bg.jpg";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import CarouselButton from "./CarouselButton";
import "./Carousel.css";
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [aboutImg, contactImg, homeImg],
      selected: 0,
      slide: "slide"
    };
  }

  onClickCarouselButton(direction) {
    clearInterval(this.interval);
    this.slideTo(direction);
  }

  slideTo(direction) {
    let newSelected = 0;
    newSelected = this.state.selected + direction;
    if (newSelected < 0) {
      newSelected = 2;
    }
    if (newSelected > 2) {
      newSelected = 0;
    }
    let slide = direction < 0 ? "carousel-reverse" : "carousel";
    this.setState({
      ...this.state,
      slide: slide
    });
    this.selectSlide(newSelected);
  }

  onClickSelectSlide(slideIndex) {
    clearInterval(this.interval);
    this.selectSlide(slideIndex);
  }

  selectSlide(slideIndex) {
    this.setState({
      selected: slideIndex
    });
  }

  componentWillMount() {
    this.interval = setInterval(
      function() {
        this.slideTo(1);
      }.bind(this),
      3000
    );
  }

  renderList() {
    const items = this.state.items.map((val, index) => {
      return (
        <li
          key={index}
          className={this.state.selected == index ? "active" : ""}
          onClick={this.onClickSelectSlide.bind(this, index)}
        />
      );
    });
    return items;
  }
  
  render() {
    const image = this.state.items[this.state.selected];

    return (
      <header>
        <div className="carousel slide">
          <ol className="carousel-indicators">
            {this.renderList()}
          </ol>
          <div className={"carousel-frame"}>
            <ReactCSSTransitionGroup
              transitionName={this.state.slide}
              transitionAppearTimeout={1000}
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              <img
                className={"carousel-img"}
                src={image}
                key={image}
                alt={image}
              />
            </ReactCSSTransitionGroup>
          </div>
          <CarouselButton
            onClickButton={this.onClickCarouselButton.bind(this, -1)}
          />
          <CarouselButton
            onClickButton={this.onClickCarouselButton.bind(this, 1)}
            isNext={true}
          />
        </div>
      </header>
    );
  }
}

export default Carousel;
