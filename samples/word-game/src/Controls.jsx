import React from 'react';

const Controls = ({ startGame }) => {
  return (
    <div>
      <button onClick={startGame}>Start New Game</button>
    </div>
  );
};
export default Controls;
