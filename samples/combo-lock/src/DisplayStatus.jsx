import React from 'react';

const DisplayStatus = ({ status }) => {
  const className = `status ${status.toLowerCase()}`;
  return (
    <div className={className}>
      {status}
    </div>
  );
};

export default DisplayStatus;

