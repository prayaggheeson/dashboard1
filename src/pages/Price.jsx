import React from "react";
import BarChartss from "../components/BarChartss";

const Price = () => {
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
    
  ];

  return (
    <div className="flex flex-col items-center justify-center w-screen pt-20 bg-slate-300 text-black">
      <h1 className="text-2xl font-bold mb-4">Price Page</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="md:order-first">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr className="hover font-semibold">
                  <th>SR.No</th>
                  <th>Cryptocurrency</th>
                  <th>Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data) => (
                  <tr key={data.srNo} className="hover">
                    <th>{data.srNo}</th>
                    <td>{data.cryptocurrency}</td>
                    <td>{data.price}</td>
                    <td>{data.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:order-last">
          <BarChartss />
        </div>
      </div>
    </div>
  );
};

export default Price;
