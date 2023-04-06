import React from "react";
import "./home.css";
import searchImg from "../../assets/search.png";
import heroImg from "../../assets/OBJECTS.png";
import Courses from "../courses/Courses";
import Testimonials from "./../../components/testimonials/Testimonials";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import Events from "./../events/Events";

const Home = () => {
  const { data, isLoading } = useQuery(["testimonials"], async () => {
    const res = await Axios.get("../../../data/testimonials.json");
    const data = res.data;
    return data;
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <section className="hero">
        <div className="content">
          <h1>The Smart Choice For Future</h1>
          <p>
            skillsbuildes is a global training provider based across the UK{" "}
            <br /> that specialises in accredited and bespoke training courses.
            We crush the...
          </p>
          <form
            action="https://www.google.com/search"
            method="get"
            className="search-bar"
          >
            <input type="text" placeholder="search anything" name="q" />
            <button type="submit">
              <img src={searchImg} />
            </button>
          </form>
        </div>
        <div className="hero-img">
          <img src={heroImg} />
        </div>
      </section>

      <Courses></Courses>
      <Testimonials data={data?.testimonials} />
      <Events />
    </>
  );
};

export default Home;
