import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';



function App() {

  const [input, setInput] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [savedPlaylist, setSavedPlaylist] = useState([]);

  function getSearch(track) {
    setInput(track);
  }

  function getTrack(track) {
    setPlaylist((prevTrack) => [...prevTrack, track]);
  }
  const removeTrackFromPlaylist = (index) => {
    setPlaylist((prevPlaylist) => prevPlaylist.filter((_, indexToRemove) => indexToRemove !== index));
  };

  function getPlaylist(item) {
    setSavedPlaylist(item);
  }


  console.log(playlist);
  
  function MockBox({ savedPlaylist }) {

    return (
      <>
        <div style={{ border: "2px black solid", width: "fit-content", height: "fit-content" }}>
          <h3>Saved Playlist Item</h3>
          <pre>{JSON.stringify(savedPlaylist, null, 2)}</pre>
        </div>
      </>
    )
  }

  return (
    <>
      <SearchBar getSearch={getSearch} />
      <SearchResults tracks={input} getTrack={getTrack} />
      <Playlist playlist={playlist} onRemoveTrack={removeTrackFromPlaylist} getPlaylist={getPlaylist} />
      <MockBox savedPlaylist={savedPlaylist} />
    </>
  )
}

export default App;



/*
<MockBox savedPlaylist={savedPlaylist} />
 
  */