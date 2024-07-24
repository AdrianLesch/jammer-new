import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';
import SpotifyAPI from './Spotify/SpotifyAPI';


function App() {

  const [input, setInput] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [savedPlaylist, setSavedPlaylist] = useState([]);
  const [accessToken, setAccessToken] = useState("");

  console.log(input);

  //GetSearch-Data
  function getSearch(track) {
    setInput(track);
  }

  //GetClickedTrack-Data
  function getTrack(track) {
    setPlaylist((prevTrack) => [...prevTrack, track]);
  }
  //RemoveItemsFromPlaylist
  const removeTrackFromPlaylist = (index) => {
    setPlaylist((prevPlaylist) => prevPlaylist.filter((_, indexToRemove) => indexToRemove !== index));
  };

  

  return (
    <>
      <SearchBar getSearch={getSearch} />
      <SearchResults tracks={input} getTrack={getTrack} />
      <Playlist playlist={playlist} onRemoveTrack={removeTrackFromPlaylist} /> 
    </>
  )
}

export default App;



/*
//SendingPlaylist-Data
  function getPlaylist(item) {
    setSavedPlaylist(item);
  }
  
  function MockBox({ savedPlaylist }) {

    return (
      <>
        <div style={{ border: "2px black solid", width: "fit-content", height: "fit-content" }}>
          <h3>Saved Playlist Item</h3>
          <pre>{JSON.stringify(savedPlaylist, null, 2)}</pre>
        </div>
      </>
    )
  }*/