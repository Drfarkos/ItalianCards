import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App";
import DictionaryContext from "./DictionaryContext";

function Index() {
  const [dictionary, setDictionary] = useState([]);
  return (
    <DictionaryContext.Provider value={{ dictionary, setDictionary }}>
      <App />
    </DictionaryContext.Provider>
  );
}

createRoot(document.getElementById("root")).render(<Index />);