import React from "react";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container"></div>
        <div className="home-text-section">
          <h1 className="primary-heading">text</h1>
          <p className="primary-text">Text</p>
          <button className="secondary-button">Order Now </button>
        </div>
        <div className="home-image-section"></div>
      </div>
    </div>
  );
};

export default Home;
