import React, { useState, useEffect } from "react";
import axios from "axios";

const PersonalDictionary = () => {
  const [dictionaryEntries, setDictionaryEntries] = useState([]);

  useEffect(() => {
    async function fetchDictionaryEntries() {
      try {
        const response = await axios.get("/api/dictionary");
        setDictionaryEntries(response.data);
      } catch (error) {
        console.error("Error fetching dictionary entries:", error);
      }
    }

    fetchDictionaryEntries();
  }, []);

  return (
    <div>
      <h2>Personal Dictionary</h2>
      <ul>
        {dictionaryEntries.map((entry, index) => (
          <li key={index}>
            {entry.italian} - {entry.english}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalDictionary;