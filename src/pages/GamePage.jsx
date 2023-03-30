import React, { useState, useEffect, useContext, useCallback, useRef, useLayoutEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./GamePage.css";
import DictionaryContext from "../DictionaryContext";

function GamePage() {
  const {dictionary} = useContext(DictionaryContext);
  const navigate = useNavigate();
  const [lastSelectedWord, setLastSelectedWord] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const imgRef = useRef(null);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    if (!dictionary || dictionary.length === 0) {
      navigate("/");
    }
  }, [dictionary, navigate]);

  const getNewWord = useCallback(
    (dictionary, lastSelectedWord) => {
      let newWord;
      do {
        newWord = dictionary[Math.floor(Math.random() * dictionary.length)].english;
      } while (newWord === lastSelectedWord);
      setLastSelectedWord(newWord);
      return newWord;
    },
    [setLastSelectedWord]
  );

  useEffect(() => {
    if (!isProcessing && dictionary.length > 0) {
      const newWord = getNewWord(dictionary, lastSelectedWord);
      setLastSelectedWord(newWord);
      setSelectedButton(null);
      if (selectedButton !== null) {
        document.querySelector(`button.game-button:nth-child(${selectedButton + 1})`).classList.remove("wrong");
      }
      setImageSrc(`https://source.unsplash.com/random/800x600?${newWord}&${Date.now()}`);
    }
  }, [dictionary, getNewWord, isProcessing, lastSelectedWord, selectedButton, setSelectedButton, setLastSelectedWord]);

  const meowSound = new Audio("/meow.wav");
  const beepSound = new Audio("/beep.wav");

  const handleButtonClick = (word, index) => {
    if (isProcessing) return;
    setIsProcessing(true);
    setSelectedButton(index);

    if (word === lastSelectedWord) {
      meowSound.play();
      document.querySelector(`button.game-button:nth-child(${index + 1})`).classList.add("right");

      setTimeout(() => {
        setIsProcessing(false);
      }, 2000);
    } else {
      beepSound.play();
      document.querySelector(`button.game-button:nth-child(${index + 1})`).classList.add("wrong");

      setTimeout(() => {
        getNewWord(dictionary, lastSelectedWord);
        setSelectedButton(null);
        setIsProcessing(false);
        document.querySelector(`button.game-button:nth-child(${index + 1})`).classList.remove("wrong");
      }, 2000);
    }
  };

  const handleLoad = useMemo(
    () => () => {
      setIsProcessing(false);
    },
    []
  );

  useLayoutEffect(() => {
    if (imgRef.current) {
      imgRef.current.addEventListener("load", handleLoad);
      return () => imgRef.current.removeEventListener("load", handleLoad);
    }
  }, [handleLoad]);

  return (
    <div className="GamePage">
      <h1>Game Page</h1>
      {imageSrc && (
        <div className="image-container">
          <img
            ref={imgRef}
            alt={lastSelectedWord}
            className="game-image"
            src={imageSrc}
          />
        </div>
      )}
      <div className="button-container">
        {dictionary.map((wordPair, index) => (
          <button
            key={index}
            className="game-button"
            onClick={() => handleButtonClick(wordPair.english, index)}
          >
            {wordPair.italian}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GamePage;