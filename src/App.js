import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';


function App() {

  const [input, setInput] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  function getSearch(track) {
    setInput(track);
  }

 function getTrack([item]) {
  setPlaylist((prevTrack) =>[...prevTrack, item]);
 }


  useEffect(() => {getTrack(playlist)}, [playlist]);

 

  return (
    <>
      <SearchBar getSearch={getSearch} />
      <SearchResults tracks={input} getTrack={getTrack}/>
      <Playlist playlist={playlist} />
    </>
  )
}

export default App;