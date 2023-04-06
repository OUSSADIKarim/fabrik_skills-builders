import React from "react";
import "./home.css";
import searchImg from "../../assets/search.png";
import heroImg from "../../assets/OBJECTS.png";


const Home = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <h1>The Smart
            Choice For Future</h1>
          <p>skillsbuildes is a global training provider based across
            the UK <br /> that specialises in accredited and bespoke training courses. We crush the...</p>
          <form action="https://www.google.com/search" method="get" className="search-bar">
            <input type="text" placeholder="search anything" name="q" />
            <button type="submit"><img src={searchImg} /></button>
          </form>
        </div>
        <div className="hero-img">
          <img src={heroImg} />
        </div>
      </div>

    </div>
  )

};

export default Home;
