import React, { useState } from 'react';

function InputField({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  onSearch(["Translation 1", "Translation 2", "Translation 3"]);
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
