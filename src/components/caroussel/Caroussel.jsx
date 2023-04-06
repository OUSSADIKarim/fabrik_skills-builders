import React from "react";
import "./caroussel.css";
// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Caroussel = (props) => {
  const { data } = props;

  return (
    <Splide
      tag="section"
      aria-labelledby="My Favorite Images"
      options={{ rewind: true, height: 600 }}
    >
      {data?.map((data) => {
        return (
          <SplideSlide>
            <h1>{data.title}</h1>
            <img src={data.image} alt="Image 1" />
            <p>{data.description}</p>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default Caroussel;
