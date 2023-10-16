import React from "react";

const Cards = ({ title, desc }) => {
  return (
    <div className="bg-white p-4 rounded-lg hover:bg-purple-500 shadow-md">
      <h2 className="text-lg font-medium">{title}</h2>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
  );
};

export default Cards;