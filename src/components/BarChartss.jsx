import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartss = () => {
  const data = [
    {
      name: "BTC",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "XRP",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Polkadot",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Solana",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "USD Coin",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Binance Coin",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Tether",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const tableData = [
    {
      srNo: 1,
      cryptocurrency: "Bitcoin (BTC)",
      price: "$20,000",
      change: "+5%",
    },
    {
      srNo: 2,
      cryptocurrency: "Ethereum (ETH)",
      price: "$1,500",
      change: "+2%",
    },
    { srNo: 3, cryptocurrency: "Cardano (ADA)", price: "$0.50", change: "+1%" },
    { srNo: 4, cryptocurrency: "Solana (SOL)", price: "$34.56", change: "-7%" },
    {
      srNo: 5,
      cryptocurrency: "Polkadot (DOT)",
      price: "$7.12",
      change: "+8%",
    },
    { srNo: 6, cryptocurrency: "Terra (LUNA)", price: "$8.67", change: "-10%" },
    {
      srNo: 7,
      cryptocurrency: "Avalanche (AVAX)",
      price: "$281.43",
      change: "+1%",
    },
    {
      srNo: 8,
      cryptocurrency: "Polygon (MATIC)",
      price: "$1.669",
      change: "-10%",
    },
    {
      srNo: 9,
      cryptocurrency: "Cosmos (ATOM)",
      price: "$8.022",
      change: "+8%",
    },
    {
      srNo: 10,
      cryptocurrency: "Fantom (FTM)",
      price: "$9.842",
      change: "+10%",
    },
    {
      srNo: 11,
      cryptocurrency: "Algorand (ALGO)",
      price: "$2.307",
      change: "+2%",
    },
  ];
  return (
    <div className="flex bg-purple-300 m-5 shadow-md rounded-lg p-6">
      <ResponsiveContainer width={500} height={400}>
        <BarChart data={data} barSize={10}>
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartss;
