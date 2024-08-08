import { Link } from "react-router-dom";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

import Logo from "../Images/Logo2.png";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsFillBagFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";

const NavBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleButtonClick = (value) => {
    setModalOpen(false);
  };

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
      icon: <BsFillPersonFill />,
    },
    {
      text: "Contact",
      icon: <BsFillQuestionCircleFill />,
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img
          src={Logo}
          alt="paint brushes and paint"
          width="15%"
          height="15%"
        />
      </div>
      <div className="navbar-links-container">
        <Link to="/">Home</Link>
        <Link to="/Art">Artwork</Link>
        <Link to="/Account">Account</Link>
        <Link to="">Contact</Link>
        <button className="primary-button" onClick={() => setModalOpen(true)}>
          Login
        </button>
      </div>
      <div className="navbar-menu-container">
        <BsList onClick={() => setOpenMenu(true)} />
      </div>

      <div className="login-modal">
        {modalOpen &&
          createPortal(
            <Modal
              closeModal={handleButtonClick}
              onSubmit={handleButtonClick}
              onCancel={handleButtonClick}
            >
              <div className="login-header">Login</div>

              <label for="email">
                <b>Email</b>
              </label>
              <input
                aria-label="email"
                type="text"
                placeholder="Enter Email"
                name="email"
                required
              />

              <label for="password">
                <b>Password</b>
              </label>
              <input
                aria-label="password"
                type="text"
                placeholder="Enter Password"
                name="password"
                required
              />

              <label>
                <input
                  aria-label="remember-me-checkbox"
                  type="checkbox"
                  checked="checked"
                  name="remember"
                  style={{ marginRight: "0.5rem" }}
                />
                Remember me
              </label>
              <span className="login-forgot-password">
                Forgot <a href="#">password?</a>
              </span>
            </Modal>,
            document.body
          )}
      </div>
    </nav>
  );
};

export default NavBar;
