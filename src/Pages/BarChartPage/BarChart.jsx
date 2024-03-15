import React from "react";
import Bar from "./Bar";
import Header from "../../component/Header";

const BarChart = () => {
  return (
    <div>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <Bar />
    </div>
  );
};

export default BarChart;
