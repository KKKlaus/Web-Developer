import React from 'react';

const WordList = ({ words }) => {
  const wordList = words.map( word => (<li key={word}>{word}</li>) );

  return (
    <div>
      <ul className="word-list">
        {wordList}
      </ul>
    </div>
  );
};
export default WordList;

