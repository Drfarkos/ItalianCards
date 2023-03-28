import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField.jsx";
import TranslationOptions from "./components/TranslationOptions.jsx";
import PersonalDictionary from "./components/PersonalDictionary.jsx";

function App() {
  const [translations, setTranslations] = useState([]);
  const [dictionary, setDictionary] = useState([]);

  const handleSearch = (translationOptions, searchedWord) => {
    const updatedOptions = translationOptions.map((translation) => ({
      translation,
      searchedWord,
    }));
    setTranslations(updatedOptions);
  };

  const handleSelect = (translation, searchedWord) => {
    addWord(searchedWord, translation);
    setTranslations([]);
  };

  const addWord = (italianWord, englishTranslation) => {
    setDictionary((prevDictionary) => [
      ...prevDictionary,
      { italian: italianWord, english: englishTranslation },
    ]);
  };

  return (
    <div className="App">
      <InputField onSearch={handleSearch} />
      {translations.length > 0 && (
        <TranslationOptions
          translations={translations}
          onSelect={(translation, searchedWord) => handleSelect(translation, searchedWord)}
        />
      )}
      <PersonalDictionary dictionary={dictionary} />
    </div>
  );
}

export default App;