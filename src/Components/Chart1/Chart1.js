import React from "react";
import { Bar, BarChart } from "recharts";

const Chart1 = ({ data }) => {
  return (
    <div>
      <BarChart width={150} height={40} data={data}>
        <Bar dataKey="investment" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Chart1;
