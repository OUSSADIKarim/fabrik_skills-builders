import React from "react";
import Logo from "../assets/logo.png"
import menu from "../assets/menu.png"
import close from "../assets/close.png"

import "../components/NavbarStyles.css";


const Navbar = () => {

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  return (
    
    <div class="topnav" id="myTopnav">
      <img src={Logo}  />
      <a href="#home" class="active">Home</a>
      <a href="#news">HOMME</a>
      <a href="#contact">COURSES</a>
      <a href="#about">EVENTS</a>
      <a href="#about">CALENDAR</a>
      <a href="#about">JOBS</a>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
  )
}

export default Navbar



