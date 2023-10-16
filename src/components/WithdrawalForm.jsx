import React from "react";
import { useState } from "react";

const WithdrawalForm = () => {
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="w-auto h-auto p-10">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2"
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2"
          />
          <button type="submit" className="btn bg-purple-500 hover:bg-red-500 border-black hover:text-white ">
            Withdraw
          </button>
        </form>
      </div>
    </>
  );
};

export default WithdrawalForm;
