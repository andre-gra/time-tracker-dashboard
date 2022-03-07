import React from 'react';

function SmallClock({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 281 281" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M140.014 0C217.345 0 280.028 62.682 280.028 140.014C280.028 217.346 217.346 280.036 140.014 280.036C62.682 280.036 0 217.345 0 140.014C0 62.683 62.683 0 140.014 0Z" fill={color} />
      <path d="M200.444 121.823H143.111V44.1001C143.111 37.9621 138.831 33 133.556 33C128.28 33 124 37.9621 124 44.1001V132.9C124 139.038 128.28 144 133.556 144H200.444C205.728 144 210 139.038 210 132.9C210 126.795 205.728 121.823 200.444 121.823Z" fill="#21222D" />
    </svg>
  );
}

export default SmallClock;
