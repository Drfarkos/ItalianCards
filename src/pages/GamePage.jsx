import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./GamePage.css";
import DictionaryContext from "../DictionaryContext";

function GamePage() {
  const { dictionary } = useContext(DictionaryContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!dictionary || dictionary.length === 0) {
      navigate("/");
    }
  }, [dictionary, navigate]);

  if (!location.state || !location.state.dictionary) {
    return null;
  }

  const { dictionary } = location.state;
  const [selectedWord, setSelectedWord] = useState(null);

  useEffect(() => {
    if (dictionary.length > 0) {
      setSelectedWord(dictionary[Math.floor(Math.random() * dictionary.length)]);
    }
  }, [dictionary]);

  return (
    <div className="GamePage">
      <h1>Game Page</h1>
      {selectedWord && (
        <div className="image-container">
          <img
            src={`https://source.unsplash.com/random/?${selectedWord.english}`}
            alt={selectedWord.english}
            className="game-image"
          />
        </div>
      )}
      <div className="button-container">
        {dictionary.map((wordPair, index) => (
          <button key={index} className="game-button">
            {wordPair.italian}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GamePage;
