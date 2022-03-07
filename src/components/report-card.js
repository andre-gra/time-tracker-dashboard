import React from 'react';
import pie from '../images/pie.jpg';
import Title from './title';

const optionsOne = ['Last 6 days', 'Today', 'Yesterday', 'Last month'];

const BUTTON_STYLE_TEXT = 'h-1/4 rounded-md p-2 font-medium';

function ReportCard() {
  return (
    <div>
      <Title text="Report" selectOptions={optionsOne} />
      <div className="flex justify-between bg-white rounded-2xl p-5">
        <div className="p-2">
          <img src={pie} alt="pie chart" />
        </div>
        <div className="flex flex-col justify-between w-1/2 pl-6 text-xs">
          <div className={`bg-pink-custom ${BUTTON_STYLE_TEXT}`}>Branding</div>
          <div className={`bg-aqua-custom ${BUTTON_STYLE_TEXT}`}>Office</div>
          <div className={`bg-green-custom ${BUTTON_STYLE_TEXT}`}>Transport</div>
        </div>
      </div>
    </div>
  );
}

export default ReportCard;
