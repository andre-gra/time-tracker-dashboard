import React from 'react';

function AppSvg({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 213 213" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="5" fill={color} />
      <rect x="113" width="100" height="100" rx="5" fill={color} />
      <rect x="113" y="113" width="100" height="100" rx="5" fill={color} />
      <rect y="113" width="100" height="100" rx="5" fill={color} />
    </svg>

  );
}

export default AppSvg;
