import React, { useState } from 'react';

function InputField({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">
        Inserire la parola italiana:
        <input
          type="text"
          id="search"
          value={inputValue}
          onChange={handleChange}
          autoFocus
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default InputField;
