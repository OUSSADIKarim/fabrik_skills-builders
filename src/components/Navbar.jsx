import React from "react";
import { useState, useEffect } from "react";

import "../components/NavbarStyles.css";
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    return () => {
      window.addEventListener("resize", changeWidth);
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <li className="items">Home</li>
          <li className="items">Services</li>
          <li className="items">Contact</li>
        </ul>
      )}

      <button onClick={toggleNav} className="btn">
        BTN
      </button>
    </nav>
  );
}
