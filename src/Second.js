import React, { useState } from 'react';
import App from './App';
import Thankyou from './Thankyou';

const Second = () => {
  const [weight, setWeight] = useState('');
  const [coins, setCoins] = useState(0);
  const [calculating, setCalculating] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [cancelClicked, setCancelClicked] = useState(false);
  const [isEligible, setIsEligible] = useState(false);

  const handleWeightChange = (e) => {
    const enteredWeight = e.target.value;
    setWeight(enteredWeight);

    // Perform the weight to coins calculation
    const calculatedCoins = Math.floor(enteredWeight / 10);
    setCoins(calculatedCoins);

    // Check if weight is 325
    if (enteredWeight === '325') {
      setIsEligible(true);
    } else {
      setIsEligible(false);
    }
  };

  const handleStartButtonClick = () => {
    setCalculating(true);
    setTimeout(() => {
      setWeight('325');
      const calculatedCoins = Math.floor(325 / 10);
      setCoins(calculatedCoins);
      setCalculating(false);
    }, 10000);
  };

  const handleSubmit = () => {
    setSubmitClicked(true);
  };

  const handleCancel = () => {
    setCancelClicked(true);
  };

  if (submitClicked) {
    return <Thankyou coins={coins} />;
  }

  if (cancelClicked) {
    return <App />;
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white font-Poppins">
      <div className="w-1/4 bg-gray-800 p-6 flex flex-col justify-between">
        <div className="flex items-center mb-10">
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
            alt="Profile"
            className="rounded-full h-16 w-16 mr-4"
          />
          <div>
            <h2 className="text-xl font-bold mb-1">Karthik</h2>
            <p className="text-gray-400">Balance Alpha Coins: 754</p>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className=" text-xl font-bold mb-4 mt-10">Services:</h3>
          <button className="bg-gradient-to-l from-blue-950 to-pink-800 text-white px-4 py-2 rounded-lg mb-2 w-full">
            Plus Membership
          </button>
          <button className="bg-gradient-to-l from-blue-950 to-pink-800 text-white px-4 py-2 rounded-lg mb-2 w-full">
            Wishlists
          </button>
          <button className="bg-gradient-to-l from-blue-950 to-pink-800 text-white px-4 py-2 rounded-lg mb-2 w-full">
            Coupons
          </button>
          <button className="bg-gradient-to-l from-blue-950 to-pink-800 text-white px-4 py-2 rounded-lg mb-2 w-full">
            Know
          </button>
          <button className="bg-gradient-to-l from-blue-950 to-pink-800 text-white px-4 py-2 rounded-lg mb-2 w-full">
            Help Center
          </button>
        </div>
      </div>

      <div className="w-3/4 bg-gray-700 p-6 flex flex-col justify-between">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">User Info:</h2>
          <div className="bg-gray-800 text-white rounded-lg p-4 mt-4">
            <p className="font-semibold">ID: 31415926535</p>
            <p className="font-semibold">Last Recycle Date: 01/04/2023</p>
            <p className="font-semibold">Last Transaction: 01/04/2023 - +150 coins</p>
          </div>
        </div>

        <p className="text-4xl font-bold mb-10 mt-10">
          Balance Alpha Coins: <span className="text-green-500">754</span>
        </p>
        <div className="flex items-center justify-center">
          <div className="border border-gray-600 rounded-lg px-4 py-2 flex items-center">
            <label htmlFor="weightInput" className="text-sm font-semibold mr-2">
              Weight:
            </label>
            <input
              type="number"
              id="weightInput"
              className="border-none bg-transparent text-white w-32 focus:outline-none"
              value={weight}
              onChange={handleWeightChange}
              required
            />
            <span className="ml-2">grams</span>
          </div>
          <button
            className="bg-gradient-to-l from-blue-950 to-pink-800 text-white px-4 py-2 rounded-lg ml-4"
            onClick={handleStartButtonClick}
            disabled={calculating}
          >
            Start
          </button>
          {calculating && <p className="text-sm text-gray-400 ml-2">Calculating...</p>}
        </div>
        {isEligible && (
          <p className="text-green-500 text-sm mt-2">
            The Submitted Goods is verified and found Eligible
          </p>
        )}
        <p className="text-2xl font-bold mt-10">
          The value for the Recycled goods: <span className="text-green-500">{coins}</span> Alpha Coins
        </p>

        {/* Submit and Cancel buttons */}
        <div className="flex justify-center mt-10">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg mr-4"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Second ;
