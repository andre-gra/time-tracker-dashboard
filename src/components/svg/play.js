import React from 'react';

function PlaySvg({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="200" r="200" fill={color} />
      <path d="M289 200L155.5 268.416V131.584L289 200Z" fill="white" />
    </svg>
  );
}

export default PlaySvg;
