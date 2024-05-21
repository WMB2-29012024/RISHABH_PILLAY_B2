import React from 'react';

const GetAPIButton = ({ album, setAlbum }) => {

    const getAPI=()=>{
        setAlbum(1)     
    }


  return (
    <div className="Button">
    <button onClick={getAPI}  disabled={album !== undefined}>Get API Call</button>

    </div>
  );
};

export default GetAPIButton;
