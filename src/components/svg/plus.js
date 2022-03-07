import React from 'react';

function PlusSvg({
  width, height, color, strokeWidth,
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 368 368" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="183" y1="0.945505" x2="185" y2="367.946" stroke={color} strokeWidth={strokeWidth} />
      <line x1="367.005" y1="174" x2="-9.15527e-05" y2="174" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

export default PlusSvg;
