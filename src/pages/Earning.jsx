import React from "react";

import Chart from "../components/Chart";

const Earning = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 w-screen bg-slate-300  items-center p-8 ">
      
      <div className="md:order-last">
        <Chart />
      </div>
      <div className="md:order-first">
        <h1 className="text-center text-4xl font-poppins pb-20">Earnings</h1>
        <div className="flex flex-col  items-center h-full">
          <div className="flex flex-row  mb-8">
            <h2 className="text-xl font-semibold">Total Earnings</h2>
            <h2 className="text-xl font-semibold">$10,000</h2>
          </div>
          <div className="flex flex-row  mb-8">
            <h2 className="text-xl font-semibold">Today's Earnings</h2>
            <h2 className="text-xl font-semibold">$100</h2>
          </div>
          <div className="flex flex-row  mb-8">
            <h2 className="text-xl font-semibold">Yesterday's Earnings</h2>
            <h2 className="text-xl font-semibold">$50</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earning;
