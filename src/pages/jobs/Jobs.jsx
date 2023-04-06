import React from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Caroussel from "./../../components/caroussel/Caroussel";

const Jobs = () => {
  const { data, isLoading } = useQuery(["courses"], async () => {
    const res = await Axios.get("../../../data/jobs.json");
    const data = res.data;
    return data;
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="main">
      <h1>Job Offers</h1>
      <Caroussel data={data?.jobs} />
    </div>
  );
};

export default Jobs;
