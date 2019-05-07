import React from 'react';

const DisplaySeries = ({ series  }) => {
  return (
    <div className="series">
      {series.join(' ')}
    </div>
  );
};

export default DisplaySeries;
