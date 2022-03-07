import React from 'react';

function SearchSvg({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 488 488" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_8_273)">
        <path d="M481.8 453L341.8 312.9C369.4 279.8 386 237.5 386 191.3C386 85.9 299.5 0.200012 193.1 0.200012C86.7 0.200012 0 86 0 191.4C0 296.8 86.5 382.5 192.9 382.5C238.1 382.5 279.7 367 312.7 341.1L453.2 481.6C461.4 489.8 473.6 489.8 481.8 481.6C490 473.4 490 461.2 481.8 453ZM41 191.4C41 108.6 109.2 41.3 192.9 41.3C276.6 41.3 344.8 108.6 344.8 191.4C344.8 274.2 276.6 341.5 192.9 341.5C109.2 341.5 41 274.1 41 191.4Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0_8_273">
          <rect width="487.95" height="487.95" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SearchSvg;
