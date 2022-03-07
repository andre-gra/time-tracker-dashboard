import React from 'react';
import DotsSvg from './svg/dots';
import PlaySvg from './svg/play';
import SmallClock from './svg/small-clock';

function Card({
  text1, text2, bold, time,
}) {
  return (
    <div className="flex justify-between bg-white rounded-2xl p-5 text-xs">
      <div className="flex items-start gap-2">
        <div className="bg-aqua-custom text-center rounded-full p-1">🔨</div>
        <div className="flex flex-col max-w-[60px]">
          <span className="font-medium">{text1}</span>
          <span className="text-gray-400">{text2}</span>
        </div>
      </div>
      <div className="self-center hidden lg:block">
        $
        {' '}
        <span className={`${bold && 'font-medium'}`}>Billable</span>
      </div>
      <div className="lg:flex items-center gap-2 hidden">
        <div className="bg-aqua-custom rounded-full p-1">
          <SmallClock width={10} height={10} color="#66c0ed" />
        </div>
        <span>{time}</span>
      </div>
      <div className="self-center">0.30m</div>
      <div className="flex gap-2 self-center">
        <PlaySvg width={15} height={15} color="black" />
        <DotsSvg width={15} height={15} color="black" />
      </div>
    </div>
  );
}

export default Card;
