import React from "react";

const Home = () => {
  return (
    <div className="content">
      <h1>The Smart
        Choice For Future</h1>
      <p>skillsbuildes is a global training provider based across
        the UK that specialises in accredited and bespoke training courses. We crush the...</p>
      <form action="https://www.google.com/search" method="get" class="search-bar">
        <input type="text" placeholder="search anything" name="q"/>
          <button type="submit"><img src="images/search.png"/></button>
      </form>

    </div>)
};

export default Home;
