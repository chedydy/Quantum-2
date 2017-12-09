import React from "react";
class CarouselButton extends React.Component {
  render() {
    return (
      <a
        className={`carousel-control-${this.props.isNext?"next":"prev"}`}
        onClick={this.props.onClickButton}
        role="button"
      >
        <span className={`carousel-control-${this.props.isNext?"next":"prev"}-icon`} aria-hidden="true" />
        <span className="sr-only">${this.props.isNext?"Next":"Previous"}</span>
      </a>
    );
  }
}
export default CarouselButton;
