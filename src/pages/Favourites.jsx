import React from 'react'
import CryptocurrencyCard from "../components/CryptocurrencyCard"

const Favourites = () => {
  const cryptoCoins = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      priceUsd: "$19345.67",
    },
    {
      name: 'Cardano',
      symbol: 'ADA',
      image: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
      priceUsd:"$0.47",
    },
    {
      name: 'XRP',
      symbol: 'XRP',
      image: 'https://cryptologos.cc/logos/xrp-xrp-logo.png',
      priceUsd: "$0.37",
    },
    {
      name: 'Ether',
      symbol: 'ETH',
      image: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
      priceUsd: "$1317.45",
    },
    {
      name: 'Tether',
      symbol: 'USDT',
      image: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
      priceUsd: "$1.00",
    },
    {
      name: 'Binance Coin',
      symbol: 'BNB',
      image: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
      priceUsd: "$281.43",
    },
    {
      name: 'USD Coin',
      symbol: 'USDC',
      image: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
      priceUsd: "$1.00",
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      image: 'https://cryptologos.cc/logos/solana-sol-logo.png',
      priceUsd: "$34.56",
    },
    {
      name: 'Polkadot',
      symbol: 'DOT',
      image: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png',
      priceUsd: "$7.12",
    },
  ];
  return (
    <>
     <div className='bg-slate-300 w-screen h-fit p-20 flex flex-col items-center'>
      <h1 className="text-4xl font-bold mb-4">My Favorite Crypto Page</h1>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
        {cryptoCoins.map((coin) => (
          <CryptocurrencyCard key={coin.symbol} coin={coin} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Favourites