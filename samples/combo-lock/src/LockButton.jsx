import React from 'react';

const LockButton = ({
  number,
  className,
  onClick,
}) => {
  className = className ? `${className} lock-button` : 'lock-button';
  return (
    <button onClick={() => onClick(number)} className={className}>{number}</button>
  );
};

export default LockButton;

