import React, { useState } from 'react';
import axios from 'axios';

function InputField({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://api.mymemory.translated.net/get', {
        params: {
          q: inputValue,
          langpair: 'it|en',
        },
      });
      const translations = response.data.matches.map((item) => item.translation);
      onSearch(translations, inputValue); // Pass inputValue as the searchedWord
    } catch (error) {
      console.error('Error fetching translations:', error);
    }
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
