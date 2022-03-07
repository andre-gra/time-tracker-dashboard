import React, { useState } from 'react';
import Title from './title';

const STYLE_COLUMNS_WRAP = 'flex items-end justify-center gap-2 h-full';
const STYLE_COLUMNS_GROUP = 'flex flex-col-reverse gap-4';
const STYLE_COLUMNS_GROUP_ACTIVE = 'flex flex-col-reverse gap-4 bg-gradient-to-b from-cyan-100 to-cyan-50';
const STYLE_COLUMN_1 = 'bg-gray-500 w-2/5 rounded-lg';
const STYLE_COLUMN_1_ACTIVE = 'bg-green-custom w-2/5 rounded-lg';
const STYLE_COLUMN_2 = 'bg-gray-800 w-2/5 rounded-lg';
const STYLE_COLUMN_2_ACTIVE = 'bg-pink-custom w-2/5 rounded-lg';
const STYLE_DAYS = 'text-center';

const optionsOne = ['Last 6 days', 'Today', 'Yesterday', 'Last month'];

function Columns({ columns }) {
  const [activeColumn, setActiveColumn] = useState(3);

  return (
    <>
      <Title text="Time Spend on projects" selectOptions={optionsOne} />
      <div className="heading bg-white rounded-t-2xl">
        <div className="float-right mr-4">
          <div className="float-left mr-4">
            <span className="bg-green-custom w-2 h-2 rounded-full inline-block mr-2" />
            <span>project x</span>
          </div>
          <div className="float-left">
            <span className="bg-pink-custom w-2 h-2 rounded-full inline-block mr-2" />
            <span>project y</span>
          </div>
        </div>
      </div>
      <div className="flex bg-white rounded-b-2xl p-5">
        <div className="relative h-rates w-10">
          <span className="absolute bottom-0">0m</span>
          <span className="absolute bottom-[20%]">10m</span>
          <span className="absolute bottom-[40%]">20m</span>
          <span className="absolute bottom-[60%]">30m</span>
          <span className="absolute bottom-[80%]">40m</span>
          <span className="absolute bottom-full">50m</span>
        </div>
        <div className="grid grid-cols-6 grow justify-around h-[500px]">
          {columns.map((column, index) => (
            <div
              key={column.day}
              className={
                index === activeColumn ? STYLE_COLUMNS_GROUP_ACTIVE : STYLE_COLUMNS_GROUP
              }
              onMouseEnter={() => { setActiveColumn(index); }}
            >
              <span className={STYLE_DAYS}>{column.day}</span>
              <div className={STYLE_COLUMNS_WRAP}>
                <div
                  className={
                    index === activeColumn ? STYLE_COLUMN_1_ACTIVE : STYLE_COLUMN_1
                  }
                  style={{ height: `${column.leftHeight}` }}
                />
                <div
                  className={
                    index === activeColumn ? STYLE_COLUMN_2_ACTIVE : STYLE_COLUMN_2
                  }
                  style={{ height: `${column.rightHeight}` }}
                />
              </div>
            </div>
          ))}
        </div>
        {/* <div className="grid grid-cols-6 grow justify-around h-[500px]">
          <div className={STYLE_COLUMNS_GROUP}>
            <span className={STYLE_DAYS}>Sun</span>
            <div className={STYLE_COLUMNS_WRAP}>
              <div className={STYLE_COLUMN_1} style={{ height: '50%' }} />
              <div className={STYLE_COLUMN_2} style={{ height: '25%' }} />
            </div>
          </div>
          <div className={STYLE_COLUMNS_GROUP}>
            <span className={STYLE_DAYS}>Sun</span>
            <div className={STYLE_COLUMNS_WRAP}>
              <div className={STYLE_COLUMN_1} style={{ height: '36%' }} />
              <div className={STYLE_COLUMN_2} style={{ height: '74%' }} />
            </div>
          </div>
          <div className={STYLE_COLUMNS_GROUP}>
            <span className={STYLE_DAYS}>Sun</span>
            <div className={STYLE_COLUMNS_WRAP}>
              <div className={STYLE_COLUMN_1} style={{ height: '49%' }} />
              <div className={STYLE_COLUMN_2} style={{ height: '28%' }} />
            </div>
          </div>
          <div className={STYLE_COLUMNS_GROUP}>
            <span className={STYLE_DAYS}>Sun</span>
            <div className={STYLE_COLUMNS_WRAP}>
              <div className={STYLE_COLUMN_1} style={{ height: '45%' }} />
              <div className={STYLE_COLUMN_2} style={{ height: '50%' }} />
            </div>
          </div>
          <div className={STYLE_COLUMNS_GROUP}>
            <span className={STYLE_DAYS}>Sun</span>
            <div className={STYLE_COLUMNS_WRAP}>
              <div className={STYLE_COLUMN_1} style={{ height: '9%' }} />
              <div className={STYLE_COLUMN_2} style={{ height: '14%' }} />
            </div>
          </div>
          <div className={STYLE_COLUMNS_GROUP}>
            <span className={STYLE_DAYS}>Sun</span>
            <div className={STYLE_COLUMNS_WRAP}>
              <div className={STYLE_COLUMN_1} style={{ height: '30%' }} />
              <div className={STYLE_COLUMN_2} style={{ height: '62%' }} />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Columns;
