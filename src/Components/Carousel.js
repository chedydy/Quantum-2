import React, { Component } from "react";
import aboutImg from "../img/about-bg.jpg";
import contactImg from "../img/contact-bg.jpg";
import homeImg from "../img/home-bg.jpg";
import LinkItem from "./LinkItem";
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

  render() {
    return (
      <header
        className=""
        style={{ backgroundImage: this.state.items[this.state.selected] }}
      >
        <div className="carousel slide">
          <ol className="carousel-indicators">
            <li
              className={this.state.selected == 0 ? "active" : ""}
              onClick={this.onClickSelectSlide.bind(this, 0)}
            />
            <li
              className={this.state.selected == 1 ? "active" : ""}
              onClick={this.onClickSelectSlide.bind(this, 1)}
            />
            <li
              className={this.state.selected == 2 ? "active" : ""}
              onClick={this.onClickSelectSlide.bind(this, 2)}
            />
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
                src={this.state.items[this.state.selected]}
                key={this.state.items[this.state.selected]}
                alt={this.state.items[this.state.selected]}
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
