import React from 'react';

function TranslationOptions({ translations, onSelect }) {
  return (
    <div>
      {translations.map(({ translation, searchedWord }, index) => (
        <button
          key={index}
          onClick={() => onSelect(translation, searchedWord)}
        >
          {translation}
        </button>
      ))}
    </div>
  );
}

export default TranslationOptions;
