import React from 'react';
import Illustration from './svg/illustration';

function SideCard() {
  return (
    <div className="flex justify-between bg-pink-custom rounded-2xl p-5 mt-8 h-36">
      <div className="flex flex-col justify-between">
        <span className="text-xs text-gray-400">Welcome back to your</span>
        <span className="font-bold">Daily Time Tracker</span>
        <button type="button" className="bg-gray-custom rounded p-2 text-white">Start tracking</button>
      </div>
      <div className="relative hidden lg:block">
        <Illustration className="absolute right-0 bottom-0" width={150} height={150} />
      </div>
    </div>
  );
}

export default SideCard;
