import React from "react";
import NavBar from "./NavBar";
import HeroImg from "../Images/heroimg.png";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container"></div>
        <div className="home-text-section">
          <h1 className="primary-heading">Lorem ipsum</h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper elementum
            aliquam fermentum orci. Tristique quis a sit eget. Quis donec risus
            varius aenean pharetra cursus tellus magna ut.Quam ornare quis in
            sit faucibus ut dolor.
          </p>
          <button className="secondary-button">Sign Up </button>
        </div>
        <div className="home-image-section">
          <img src={HeroImg} alt="illustration of woman painting a canvas" />
        </div>
      </div>
    </div>
  );
};
export default Home;
