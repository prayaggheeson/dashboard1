import React from "react";
import Cards from "./Cards";
import Chart from "./Chart";
import Stats from "./Stats";
import AccountBalance from "./AccountBalance";

import BarChartss from "./BarChartss";

const UserDashboard = () => {
  const cards = [
    { title: "Card 1", desc: "description of the card" },
    { title: "Card 2", desc: "description of the card" },
    { title: "Card 3", desc: "description of the card" },
    { title: "Card 4", desc: "description of the card" },
    { title: "Card 5", desc: "description of the card" },
    { title: "Card 6", desc: "description of the card" },
  ];

  return (
    <div className="flex-grow bg-slate-300 p-6 md:p-6">
      <h1 className="text-2xl font-semibold mt-8 md:mt-20">User Dashboard</h1>
      <p className="my-4 text-lg">
        Welcome to your dashboard, here you can see statistics about all your
        data
      </p>

      <div className="grid gap-6">
        <Stats />
        <AccountBalance />
        <div className="grid gap-6 md:grid-cols-2">
        <div className="md:order-last">
          <Chart />
        </div>
        <div className="md:order-first">
          <BarChartss />
        </div>
      </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {cards.map((card, index) => (
          <Cards key={index} title={card.title} desc={card.desc} />
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
