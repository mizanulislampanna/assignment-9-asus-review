import React from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Chart2 = ({ data }) => {
  return (
    <div>
      <h2>Line Chart</h2>
      <LineChart width={400} height={400} data={data}>
        <Line dataKey={"sell"}></Line>
        <XAxis dataKey={"month"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
      </LineChart>
    </div>
  );
};

export default Chart2;
