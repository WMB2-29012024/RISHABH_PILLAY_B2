import React, { useEffect, useState } from 'react';
import './App.css';
import GetAPIButton from './Components/GetAPIButton/GetAPIButton';
import NextButton from './Components/NextButton/NextButton';
import PervButton from './Components/PervButton/PervButton';
import Card from './Components/Card/Card';

function App() {
  const [album, setAlbum] = useState(undefined);
  const [dataList, setDataList] = useState([]);

  console.log(dataList);
  
  const fetchData = async () => {
    try {
      if(album !== undefined) {
        const API = `https://jsonplaceholder.typicode.com/albums/${album}/photos`;
        const jsonData = await fetch(API);
        const data = await jsonData.json();
        setDataList(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [album]);

  return (
    <div className="App">
      <GetAPIButton  album={album} setAlbum={setAlbum} />

      

      <div className='cardList'>
        {
          dataList.map((profile)=>{

            return <Card
            id={profile.id}
            title={profile.title}
            url={profile.url}
            />

          })      




        }
       

      </div>
      <div className='next-Perv-button'>
        <PervButton  album={album} setAlbum={setAlbum} />
        <NextButton  album={album} setAlbum={setAlbum} />
      </div>
    </div>
  );
}

export default App;
