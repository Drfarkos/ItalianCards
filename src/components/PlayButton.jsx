import React from 'react';
import { useHistory } from 'react-router-dom';

function PlayButton() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/game');
  };

  return (
    <button
      onClick={handleClick}
      style={{
        borderRadius: '50%',
        backgroundColor: 'blue',
        color: 'white',
        fontSize: '1.5rem',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
      }}
    >
      Play
    </button>
  );
}

export default PlayButton;
