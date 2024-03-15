import React from "react";
import Line from "./Line";
import Header from "../../component/Header";

const LineChart = () => {
  return (
    <div style={{ height: "75vh" }}>
      <Header title="Line Chart" subTitle="Simple Line Chart" />

      <Line isDashBord={"no"} />
    </div>
  );
};

export default LineChart;
