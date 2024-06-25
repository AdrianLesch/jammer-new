import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';


function App() {

  const [input, setInput] = useState([]);
  const [appClicked, setAppClicked] = useState(false);
  const [playlist, setPlaylist] = useState([]);

  //console.log(`Hi I reached the App component: ${appClicked}`)

  function getSearch(track) {
    setInput(track);
  }

  function getAppClick(bool) {
    setAppClicked(bool);
  }

  useEffect(() => {setPlaylist(input)}, [appClicked]);

  //console.log(input);

  return (
    <>
      <SearchBar getSearch={getSearch} />
      <SearchResults tracks={input} getAppClick={getAppClick}/>
      <Playlist playlist={playlist} />
    </>
  )
}

export default App;