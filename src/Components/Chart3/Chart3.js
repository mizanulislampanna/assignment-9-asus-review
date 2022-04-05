import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const Chart3 = ({ data }) => {
  return (
    <div>
      <PieChart width={500} height={500}>
        <Pie
          dataKey={"sell"}
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Chart3;
