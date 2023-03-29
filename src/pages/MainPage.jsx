import React, { useState, useContext } from "react";
import "./MainPage.css";
import InputField from "../components/InputField.jsx";
import TranslationOptions from "../components/TranslationOptions.jsx";
import PersonalDictionary from "../components/PersonalDictionary.jsx";
import { Link } from "react-router-dom";
import DictionaryContext from "../DictionaryContext";

function MainPage() {
  const { dictionary, setDictionary } = useContext(DictionaryContext);
  const [translations, setTranslations] = useState([]);

  const handleSearch = (translationOptions, searchedWord) => {
    const translationObjects = translationOptions.map((translation) => ({
      translation,
      searchedWord,
    }));
    setTranslations(translationObjects);
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
    <div className="MainPage">
      <InputField onSearch={handleSearch} />
      {translations.length > 0 && (
        <TranslationOptions
          translations={translations}
          onSelect={(translation, searchedWord) =>
            handleSelect(translation, searchedWord)
          }
        />
      )}
      <PersonalDictionary dictionary={dictionary} />
      <Link
        to={{
          pathname: "/game",
          state: { dictionary },
        }}
      >
        <button className="play-button">Play</button>
      </Link>
    </div>
  );
}

export default MainPage;
