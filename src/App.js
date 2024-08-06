import { useState } from "react";
import "./App.css";
import HeroImg from "./heroimg.png";
import Modal from "./Components/Modal";
import Login from "./Components/Login";
import Artwork from "./Components/Artwork";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="home-container">
        <div className="home-banner-container">
          <div className="home-bannerImage-container"></div>
          <div className="home-text-section">
            <div className="home-heading">Lorem ipsum</div>
            <div className="home-primary-text">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper elementum
              aliquam fermentum orci. Tristique quis a sit eget. Quis donec
              risus varius aenean pharetra cursus tellus magna ut.Quam ornare
              quis in sit faucibus ut dolor.
            </div>
            <button className="secondary-button">Sign Up </button>
          </div>
          <div className="home-image-section">
            <img src={HeroImg} alt="illustration of woman painting a canvas" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
