import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Chart = () => {
  const data = [
    { name: "Total", value: 10000 },
    { name: "Today", value: 5000 },
    { name: "Yesterday", value: 950 },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#fe992c", "#f56991", "#966fd6"];

  return (
    <div className="bg-purple-300 m-5 shadow-md rounded-lg p-4">
      <PieChart width={500} height={400}>
        <Pie  
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill=""
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Chart;