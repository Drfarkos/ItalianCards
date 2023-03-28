import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField.jsx";
import TranslationOptions from "./components/TranslationOptions.jsx";
import PersonalDictionary from "./components/PersonalDictionary.jsx";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedTranslation, setSelectedTranslation] = useState(null);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  const handleSelect = (translation) => {
    setSelectedTranslation(translation);
  };

  return (
    <div className="App">
      <InputField onSearch={handleSearch} />
      <TranslationOptions translations={searchResults} onSelect={handleSelect} />
      <PersonalDictionary selectedTranslation={selectedTranslation} />
    </div>
  );
}

export default App;
