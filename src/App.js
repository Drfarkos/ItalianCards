import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TranslationOptions from './components/TranslationOptions';
import PersonalDictionary from './components/PersonalDictionary';

function App() {
  const [translations, setTranslations] = useState([]);
  const [personalDictionary, setPersonalDictionary] = useState([]);

  const handleTranslations = (newTranslations) => {
    setTranslations(newTranslations);
  };

  const addToPersonalDictionary = (wordPair) => {
    setPersonalDictionary([...personalDictionary, wordPair]);
  };

  return (
    <div className="App">
      <h1>Italian to English Translator</h1>
      <InputField onTranslations={handleTranslations} />
      <TranslationOptions translations={translations} onAddToDictionary={addToPersonalDictionary} />
      <PersonalDictionary personalDictionary={personalDictionary} />
    </div>
  );
}

export default App;
