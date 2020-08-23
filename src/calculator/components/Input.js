import React from 'react';

function Input({
  name,
  placeholder,
  value,
  handleChange
}) {
  return (
    <input
      type="number"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}

export default Input;
