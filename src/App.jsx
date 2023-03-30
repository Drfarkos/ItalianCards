import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GamePage from "./pages/GamePage";
import DictionaryContext from "./DictionaryContext";

function App() {
  const { dictionary } = React.useContext(DictionaryContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/game"
          element={
            dictionary && dictionary.length > 0 ? (
              <GamePage />
            ) : (
              <MainPage />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;