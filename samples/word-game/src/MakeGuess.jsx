import React from 'react';

const MakeGuess = ({ disabled, updateGuess, guess }) => {
  return (
    <div>
      <input onChange={ e=> updateGuess(e.target.value)} value={guess} disabled={disabled} className="guess"/>
      <button disabled={disabled} >Guess</button>
    </div>
  );
};
export default MakeGuess;

