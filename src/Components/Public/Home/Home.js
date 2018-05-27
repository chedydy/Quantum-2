import React from "react";
import { Carousel } from "../Carousel/Carousel";
import { PostsPreview } from "../Posts";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <Carousel className="carousel-container" />
      <PostsPreview />
    </div>
  );
};

export { Home };
