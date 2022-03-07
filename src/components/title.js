import React from 'react';
import Selection from './selection';
import Filter from './svg/filter';

function Title({ text, selectOptions, filterOn }) {
  return (
    <div className="flex justify-between mb-4 mt-8">
      <span className="text-black font-bold">{text}</span>
      <div className="flex gap-4">
        <Selection className="rounded-md p-2 text-xs text-gray-400 focus:outline-none focus:ring ring-green-custom" options={selectOptions} />
        {filterOn && (
        <div className="bg-white p-2 rounded-md">
          <Filter width={20} height={20} color="gray" />
        </div>
        )}
      </div>
    </div>
  );
}

export default Title;
