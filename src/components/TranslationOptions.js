import React from 'react';

function TranslationOptions({ translations, onSelect }) {
  return (
    <div>
      {translations.map((translation, index) => (
        <button key={index} onClick={() => onSelect(translation)}>
          {translation}
        </button>
      ))}
    </div>
  );
}

export default TranslationOptions;
