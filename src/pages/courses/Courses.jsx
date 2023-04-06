import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import Caroussel from "./../../components/caroussel/Caroussel";
import "./courses.css";

const Courses = () => {
  const { data, isLoading } = useQuery(["courses"], async () => {
    const res = await Axios.get("../../../data/courses.json");
    const data = res.data;
    return data;
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="main">
      <h1>Our Courses</h1>
      <Caroussel data={data?.courses} />
    </main>
  );
};

export default Courses;
