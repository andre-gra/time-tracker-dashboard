import React from 'react';

function ChatSvg({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 587 488" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="587" height="386" rx="10" fill={color} />
      <path d="M179 386L84.5 297.665L84.5 474.335L179 386Z" fill={color} />
      <circle cx="138" cy="193" r="50" fill="white" />
      <circle cx="293" cy="193" r="50" fill="white" />
      <circle cx="448" cy="193" r="50" fill="white" />
    </svg>

  );
}

export default ChatSvg;
