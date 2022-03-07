import React from 'react';

function Selection({ options, className }) {
  return (
    <select className={className}>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
}

export default Selection;
