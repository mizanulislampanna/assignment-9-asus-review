import React from "react";
import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";

const Chart4 = ({ data }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Area Chart</h2>
      <AreaChart
        width={400}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis dataKey={"month"}></XAxis>
        <YAxis dataKey={"sell"}></YAxis>
        <Tooltip></Tooltip>
        <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default Chart4;
