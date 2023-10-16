import React from "react";

const AccountBalance = () => {
  return (
    <>
      <div className="stats flex flex-col md:flex-row bg-white shadow-md text-black">
        <div className="stat flex-1 p-4 md:p-6 hover:bg-purple-500">
          <div className="stat-title text-center text-base md:text-lg">
            Account balance
          </div>
          <div className="stat-value text-center text-3xl font-bold md:text-3xl">
            $89,400
          </div>
          <div className="stat-actions flex justify-center md:justify-end mt-4 md:mt-0">
            <button className="btn btn-sm mr-2 btn-success">Add funds</button>
          </div>
        </div>

        <div className="stat flex-1 p-4 md:p-6 hover:bg-purple-500">
          <div className="stat-title text-center text-base md:text-lg">
            Current balance
          </div>
          <div className="stat-value text-center text-3xl font-bold md:text-4xl">
            $89,400
          </div>
          <div className="stat-actions flex justify-center md:justify-end mt-4 md:mt-0">
            <button className="btn btn-sm mr-2">Withdrawal</button>
            <button className="btn btn-sm mr-2">Deposit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountBalance;