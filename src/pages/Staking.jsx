import React from "react";

const Staking = () => {
  return (
    <div className="flex-col w-screen items-center bg-slate-300 justify-evenly text-center pt-20">
      <div className="mockup-phone right-0 border-primary">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <p className="m-5">
              This is where you can stake your tokens to earn rewards.
            </p>
            <div className="w-30 h-30 rounded-lg overflow-hidden m-4">
              <img
                className="object-cover w-full h-full"
                src="https://public.bnbstatic.com/static/academy/uploads/79a696dc20dc43f191ff60c1e16c4b41.png"
              />
            </div>

            <button className="bg-purple-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Stake Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;
