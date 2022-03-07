import React from 'react';

function DotsSvg({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="200" r="200" fill={color} />
      <circle cx="109" cy="200" r="35" fill="white" />
      <circle cx="200" cy="200" r="35" fill="white" />
      <circle cx="291" cy="200" r="35" fill="white" />
    </svg>
  );
}

export default DotsSvg;
