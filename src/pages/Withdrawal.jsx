import React from 'react';
import WithdrawalForm from '../components/WithdrawalForm';

const Withdrawal = () => {
  return (
    <div className="flex flex-col  bg-slate-300 justify-center p-10 items-center w-screen h-screen">
      <h1 className="text-3xl font-bold">Withdraw Crypto</h1>
      <WithdrawalForm />
    </div>
  );
};

export default Withdrawal;
