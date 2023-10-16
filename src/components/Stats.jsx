import React from "react";

const Stats = () => {
  return (
    <>
      <div className="stats flex flex-col md:flex-row shadow-md">
        <div className="stat flex-1 p-2 md:p-3 hover:bg-purple-500">
          <div className="stat-figure mx-auto md:w-auto md:h-auto text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-center md:text-lg">Total Staking Income</div>
          <div className="stat-value text-center md:text-3xl text-primary">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat flex-1 p-4 md:p-6 hover:bg-purple-500">
          <div className="stat-figure mx-auto md:w-auto md:h-auto text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-center md:text-lg">Active Users</div>
          <div className="stat-value text-center md:text-3xl text-secondary">2.6M</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat flex-1 p-4 md:p-6 hover:bg-purple-500">
          <div className="stat-figure mx-auto md:w-auto md:h-auto text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" alt="Avatar" />
              </div>
            </div>
          </div>
          <div className="stat-value text-center md:text-3xl">86%</div>
          <div className="stat-title text-center md:text-lg">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>
    </>
  );
};

export default Stats;