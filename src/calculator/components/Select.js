import React from 'react';

// const Select = () => ({})
function Select({ name, value, handleChange }) {
  return (
    <select
      name={name}
      onChange={handleChange}
      value={value}>
        <option value="GBP">GBP</option>
        <option value="HKD">HKD</option>
        <option value="IDR">IDR</option>
        <option value="ILS">ILS</option>
        <option value="PLN">PLN</option>
        <option value="USD">USD</option>
    </select>
  );
}

export default Select;
