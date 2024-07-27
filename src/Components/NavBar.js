import React, { useState } from "react";
import Logo from "../Images/Logo.png";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsFillBagFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";


const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
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
        <div className="nav-logo">
        <img src={Logo} alt="paint brushes and paint" width="4%" height="4%" />
        </div>
          <div className="navbar-links-container">
            <a href="">Home</a>
            <a href="">Artwork</a>
            <a href="">Account</a>
            <a href="">Contact</a>
            <button className="primary-button">Sign Up</button>
          </div>
          <div className="navbar-menu-container">
        <BsList onClick={() => setOpenMenu(true)} />
      </div>       
    </nav>
      );
    
    };
    
 export default NavBar;