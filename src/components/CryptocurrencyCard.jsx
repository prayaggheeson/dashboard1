import React from "react";

const CryptocurrencyCard = ({ coin }) => {
  return (
    <div className="bg-white w-100 rounded-xl shadow-md hover:bg-purple-500 p-10 flex flex-col items-center">
      <img src={coin.image} alt={coin.name} className="w-50 h-20 mb-4" />
      <h2 className="text-xl font-bold mb-2">{coin.name}</h2>
      <p className="mb-2">{coin.symbol}</p>
      <p className="text-sm text-gray-700">{coin.priceUsd}</p>
    </div>
  );
};

export default CryptocurrencyCard;
