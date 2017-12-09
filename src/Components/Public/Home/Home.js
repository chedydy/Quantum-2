import React, { Component } from "react";
import { Carousel } from "../Carousel/Carousel";
import {PostsPreview} from "../PostsPreview";
import "./Home.css";
const Home = ()=>{
    return (
      <div className="home-container">
        <Carousel className="carousel-container" />
        <PostsPreview />
      </div>
    );
  }

export { Home };
