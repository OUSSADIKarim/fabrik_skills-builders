import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import Caroussel from "./../../components/caroussel/Caroussel";

const Courses = () => {
  const { data, isLoading } = useQuery(["courses"], async () => {
    const res = await Axios.get("../../../data/courses.json");
    const data = res.data;
    return data;
  });

  if (isLoading) {
    return <h1>test</h1>;
  }

  return <Caroussel data={data?.courses} />;
};

export default Courses;
