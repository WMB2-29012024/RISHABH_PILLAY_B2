import React from 'react';

const NextButton = ({ album, setAlbum  }) => {
  const handleNextClick = () => {
    setAlbum(album + 1);
  };

  return (
    <div className="Button">
      <button onClick={handleNextClick}disabled={album===undefined}>Next</button>
    </div>
  );
};

export default NextButton;
