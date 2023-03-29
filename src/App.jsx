import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GamePage from "./pages/GamePage";
import DictionaryContext from "./DictionaryContext";

function App() {
  const [dictionary, setDictionary] = useState([]);

  return (
    <DictionaryContext.Provider value={{ dictionary, setDictionary }}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </Router>
    </DictionaryContext.Provider>
  );
}

export default App;
