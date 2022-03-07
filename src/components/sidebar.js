import React, { useState } from 'react';
import AppSvg from './svg/app';
import CalendarSvg from './svg/calendar';
import ClockSvg from './svg/clock';
import NoteSvg from './svg/notes';
import PlusSvg from './svg/plus';
import SettingWhellSvg from './svg/setting-wheel';
import SmallClock from './svg/small-clock';
import WhellSvg from './svg/wheel';

function Sidebar() {
  const [active, setActive] = useState('one');

  return (
    <div className="flex flex-col justify-between items-center bg-gray-900 w-20">
      <div className="mt-4">
        <ClockSvg width={30} height={30} />
      </div>
      <div className="flex flex-col grow mt-16 gap-2">
        <button type="button" className={`${active === 'one' ? 'bg-gray-800' : null} rounded-2xl p-3`} onClick={() => setActive('one')}>
          <AppSvg width={15} height={15} color={active === 'one' ? '#e1fe5e' : '#8d8e97'} />
        </button>
        <button type="button" className={`${active === 'two' ? 'bg-gray-800' : null} rounded-2xl p-3`} onClick={() => setActive('two')}>
          <SmallClock width={15} height={15} color={active === 'two' ? '#e1fe5e' : '#8d8e97'} />
        </button>
        <button type="button" className={`${active === 'three' ? 'bg-gray-800' : null} rounded-2xl p-3`} onClick={() => setActive('three')}>
          <NoteSvg width={15} height={15} color={active === 'three' ? '#e1fe5e' : '#8d8e97'} />
        </button>
        <button type="button" className={`${active === 'four' ? 'bg-gray-800' : null} rounded-2xl p-3`} onClick={() => setActive('four')}>
          <WhellSvg width={15} height={15} color={active === 'four' ? '#e1fe5e' : '#8d8e97'} />
        </button>
        <button type="button" className={`${active === 'five' ? 'bg-gray-800' : null} rounded-2xl p-3`} onClick={() => setActive('five')}>
          <CalendarSvg width={15} height={15} color={active === 'five' ? '#e1fe5e' : '#8d8e97'} />
        </button>
        <button type="button" className={`${active === 'six' ? 'bg-gray-800' : null} rounded-2xl p-3`} onClick={() => setActive('six')}>
          <SettingWhellSvg width={15} height={15} color={active === 'six' ? '#e1fe5e' : '#8d8e97'} />
        </button>
      </div>
      <div className="mb-8">
        <div className="bg-gray-700 rounded-full p-3">
          <PlusSvg width={15} height={15} color="white" strokeWidth={20} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
