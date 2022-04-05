import React from "react";
import HomePageReview from "../HomePageReview/HomePageReview";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-continer">
        <div className="home-text">
          <h2>ASUS ZenBook Flip</h2>
          <h2>Ultra Slim 2-in-1</h2>
          <p>
            Intel Evo Platform - The perfect combination of performance,
            responsiveness and battery life. Enjoy amazing performance with the
            11th Gen Intel Core i7 processor with Intel Iris Xe graphics.
          </p>
          <button className="live-demo-btn">
            <p>Live Demo</p>
          </button>
        </div>
        <div className="home-image-container">
          <img
            src="https://m.media-amazon.com/images/I/81kaVz6wxXS._AC_SX679_.jpg"
            alt=""
          />
        </div>
      </div>
      <HomePageReview></HomePageReview>
    </div>
  );
};

export default Home;
