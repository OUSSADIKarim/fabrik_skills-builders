import React, { useState } from "react";
import "./testimonials.css";
// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "./testimonials.css";

const Testimonials = (props) => {
  const { data } = props;

  return (
    <>
      <h2 className="testimonials-h2">Testimonials</h2>

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
              <blockquote>{`" ${data.content} "`}</blockquote>
              <h3>{data.name}</h3>
            </SplideSlide>
          );
        })}
      </Splide>
    </>
  );
};

export default Testimonials;
