import React from 'react';

const Thankyou = (props) => {
  const { coins } = props;

  return (
    <div className="bg-background bg-cover bg-center min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl text-green-600 font-bold mt-1 mb-8">
        One step towards 3R's
      </h1>
      <div className="text-center">
        <h2 className="text-6xl text-black font-bold mb-4"><span className='text-rose-500'>Thank you </span> for your Contribution</h2>
        <p className="text-black font-bold text-xl">
          Transaction successful! <span className='text-red-500 font-black'>{coins}</span> Alpha Coins has been credited to your Account.
        </p>
      </div>
    </div>
  );
};

export default Thankyou;

