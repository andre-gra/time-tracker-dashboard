import React from 'react';

function CalendarSvg({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 478 408" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="90" width="478" height="318" fill={color} />
      <rect width="478" height="75" fill={color} />
      <rect x="63" y="131" width="70" height="85" fill="#21222D" />
      <rect x="151" y="131" width="70" height="85" fill="#21222D" />
      <rect x="239" y="131" width="70" height="85" fill="#21222D" />
      <rect x="327" y="131" width="70" height="85" fill="#21222D" />
      <rect x="151" y="239" width="70" height="85" fill="#21222D" />
      <rect x="239" y="239" width="70" height="85" fill="#21222D" />
      <rect x="327" y="239" width="70" height="85" fill="#21222D" />
      <rect x="309" y="20" width="53" height="36" fill="#21222D" />
      <rect x="107" y="20" width="53" height="36" fill="#21222D" />
    </svg>
  );
}

export default CalendarSvg;
