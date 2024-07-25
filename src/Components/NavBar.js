import React, { useState } from "react";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsFillBagFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillQuestionCircleFill } from "react-icons/bs";


const NavBar = () => {
    const menuOptions = [
      {
        text: "Home",
        icon: <BsFillHouseDoorFill />,
      },
      {
        text: "Artwork",
        icon: <BsFillBagFill />,
      },
      {
        text: "Account",
        icon: <BsFillPersonFill />
      },
      {
        text: "Contact",
        icon: <BsFillQuestionCircleFill />
      },
    ];
  
    return (
        <nav>
        <div className="nav-logo-container">
        <img src="./Images/logo.png" alt="paint brush" width="500" height="600"/>
        </div>
          <div className="navbar-links-container">
            <a href="">Home</a>
            <a href="">Artwork</a>
            <a href="">Account</a>
            <a href="">Contact</a>
            <button className="primary-button">Sign Up</button>
          </div>
        </nav>
      );
    };
    
 export default NavBar;