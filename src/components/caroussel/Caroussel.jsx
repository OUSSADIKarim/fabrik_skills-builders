import React, { useState } from "react";
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
      className="splide"
      aria-labelledby="My Favorite Images"
      options={{
        rewind: true,
        height: 400,
        autoplay: true,
        interval: 3000,
        gap: "4rem",
        pagination: true,
        paginationKeyboard: true,
        keyboard: true,
        focus: "center",
      }}
    >
      {data?.map((data) => {
        return (
          <SplideSlide className="splideSlide">
            <img src={data.image} alt="Image 1" />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default Caroussel;
