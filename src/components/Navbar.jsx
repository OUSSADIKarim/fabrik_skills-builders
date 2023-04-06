import React from "react";
import Logo from "../assets/logo.png"
import menu from "../assets/menu.png"
import close from "../assets/close.png"

import "../components/NavbarStyles.css";


const Navbar = () => {
  const handleMenue = () => {
  const menuBtn = document.querySelector(".menue-btn");
  const navbar = document.querySelector(".navbar");
  menuBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  }
  // const menuBtn = document.querySelector(".menue-btn");
  // const navbar = document.querySelector(".navbar");
  // console.log(menuBtn);
  // menuBtn.addEventListener("click", () => {
  //   menuBtn.classList.toggle("active");
  //   navbar.classList.toggle("active");
  // })
  return (
    <header>
      <a href="" className="logo"><img src={Logo} /></a>
      <div className="menue-btn" onClick={handleMenue}><img src={menu} alt="" /> </div>
      <div className="navbar">
        <div className="navbar-items">
          <a href="index.html">HOMME</a>
          <a href="blog.html">BLOG</a>
          <a href="destination.html">DESTINATIONS</a>
          <a href="notfound.html">CONTACT</a>

        </div>
      </div>
    </header>
  )
}

export default Navbar



