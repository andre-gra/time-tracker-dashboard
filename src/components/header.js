import React from 'react';
import Profile from './profile';
import Selection from './selection';
import AppAltSvg from './svg/appAlt';
import BellSvg from './svg/bell';
import ChatSvg from './svg/chat';
import SearchSvg from './svg/search';

const GRAY = '#d1d5db';
const optionsOne = ['17 January, 2022', '16 January, 2022', '14 January, 2022', '13 January, 2022'];

function Header() {
  return (
    <div className="bg-white flex justify-end lg:justify-between items-center h-full px-2 lg:px-10">
      <div className="hidden flex-col lg:flex">
        <span className="font-bold">Dashboard</span>
        <Selection className="text-xs text-gray-400 focus:outline-none focus:ring ring-green-custom" options={optionsOne} />
      </div>
      <div className="search hidden lg:block relative mx-auto text-gray-600">
        <button type="submit" className="absolute left-2 top-0 mt-3 mr-4">
          <SearchSvg width={20} height={20} color="gray" />
        </button>
        <input
          className="border-2 border-gray-200 bg-gray-100 h-10 pl-10 pr-16 rounded-lg text-sm focus:outline-none focus:ring ring-green-custom"
          type="search"
          name="search"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center gap-6">
        <ChatSvg width={20} height={20} color={GRAY} />
        <AppAltSvg width={20} height={20} color={GRAY} />
        <BellSvg width={20} height={20} color={GRAY} />
        <Profile name="Andrea" job="Developer" />
      </div>
    </div>
  );
}

export default Header;
