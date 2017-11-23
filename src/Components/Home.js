import React, { Component } from "react";
import Carousel from "./Carousel";
import PostsPreview from "./PostsPreview";
import "./Home.css";
class Home extends Component {
  componentWillMount() {}

  render() {
    return (
      <div className="home-container">
        <Carousel className="carousel-container"/>
        <PostsPreview/>
      </div>
    );
  }
}

export default Home;
