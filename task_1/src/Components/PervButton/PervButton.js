import React from 'react';

const PrevButton = ({ album, setAlbum }) => {
  const handlePrevClick = () => {
    setAlbum(album - 1)
  };

  return (
    <div className="PrevButton">
      <button onClick={handlePrevClick} disabled={album < 2 || album===undefined }>
        Previous
      </button>
    </div>
  );
};

export default PrevButton;
