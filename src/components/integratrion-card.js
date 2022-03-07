import React from 'react';
import Title from './title';
import SlackSvg from './svg/slack';
import StorybookSvg from './svg/storybook';

const text = [
  'Integration involves identifying wich components to integrate and how to get a reference',
  'Integration involves identifying wich components to integrate and how to get a reference',
];

const optionsOne = ['Last 6 days', 'Today', 'Yesterday', 'Last month'];

function IntegrationCard() {
  return (
    <div>
      <Title text="Integration" selectOptions={optionsOne} />
      <div className="flex flex-col gap-4 justify-between bg-white rounded-2xl p-5 text-xs">
        <div className="bg-white shadow-xl rounded-md p-4">
          <div className="flex justify-between">
            <SlackSvg width={80} />
            <button type="button" className="bg-pink-custom rounded px-2 py-1">Connected</button>
          </div>
          <div className="text-gray-400 mt-4">{text[0]}</div>
        </div>
        <div className="bg-white shadow-xl rounded-md p-4">
          <div className="flex justify-between">
            <StorybookSvg width={80} />
            <button type="button" className="bg-gray-200 rounded px-2 py-1">Connect</button>
          </div>
          <div className="text-gray-400 mt-4">{text[1]}</div>
        </div>
      </div>
    </div>
  );
}

export default IntegrationCard;
