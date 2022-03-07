import React from 'react';

function NoteSvg({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 321 422" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M320.334 27.687H0.343994V421.647H320.334V27.687Z" fill={color} />
      <path d="M224.814 56H95.1859C86.2378 56 79 43.4367 79 28.0013C79 12.4818 86.2393 0 95.1859 0H224.814C233.762 0 241 12.4818 241 28.0013C241 43.4367 233.761 56 224.814 56Z" fill={color} />
      <line x1="79" y1="180" x2="241" y2="180" stroke="black" strokeWidth="30" strokeLinecap="round" />
      <line x1="122.5" y1="42.5" x2="198.5" y2="42.5" stroke="black" strokeWidth="45" strokeLinecap="round" />
      <line x1="79" y1="253" x2="241" y2="253" stroke="black" strokeWidth="30" strokeLinecap="round" />
      <line x1="79" y1="326" x2="241" y2="326" stroke="black" strokeWidth="30" strokeLinecap="round" />
    </svg>
  );
}

export default NoteSvg;
