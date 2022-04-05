import React from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Chart1 = ({ data }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <BarChart width={400} height={400} data={data}>
        <Bar dataKey="investment" fill="#8884d8" />
        <XAxis dataKey={"month"}></XAxis>
        <YAxis dataKey={"investment"}></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Chart1;
