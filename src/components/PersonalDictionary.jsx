import React from "react";

const PersonalDictionary = ({ dictionary = [] }) => {
  return (
    <div>
      <h2>Personal Dictionary</h2>
      <ul>
        {dictionary.map((entry, index) => (
          <li key={index}>
            {entry.italian} - {entry.english}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalDictionary;
