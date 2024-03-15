import React from "react";
import Pie from "./Pie";
import Header from "../../component/Header";

const PieChart = () => {
  return (
    <div style={{ height: "75vh" }}>
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />

      <Pie />
    </div>
  );
};

export default PieChart;
