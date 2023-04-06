import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import Caroussel from "./../../components/caroussel/Caroussel";

const Events = () => {
  const { data, isLoading } = useQuery(["courses"], async () => {
    const res = await Axios.get("../../../data/events.json");
    const data = res.data;
    return data;
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Caroussel data={data?.events} />
    </div>
  );
};

export default Events;
