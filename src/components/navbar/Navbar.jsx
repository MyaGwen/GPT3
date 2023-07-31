import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const navItems = [
    { name: "Home", link: "#Home" },
    { name: "What is GPT?", link: "#wgpt3" },
    { name: "Open AI", link: "#features" },
    { name: "Case Studies", link: "#possibility" },
    { name: "Library", link: "#footer" },
  ];

  const navItem = navItems.map((item) => (
    <p>
      <a href={item.link}>{item.name}</a>
    </p>
  ));

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <a href="#Home">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="gpt3__navbar-links_container">{navItem}</div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">{navItem}</div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <button type="button">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
