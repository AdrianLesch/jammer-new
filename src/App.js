import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';
import styles from './App.module.css';



function App() {

  const [input, setInput] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [savedPlaylist, setSavedPlaylist] = useState([]);
  const [accessToken, setAccessToken] = useState("");


  //console.log(input);

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

  //Animation
const handleAnimation = (e) => {
  const textBox = document.getElementById("textbox");
  if(textBox.style.display === "block") {
    textBox.style.display = "none";
  } else {
    textBox.style.display = "block";
  }
}


  return (
    <>
    <div className={styles.container}>
      <h1>Mighty Magic Track Explorer <span className={styles.tapecontainer}><span className={styles.tapeone}>&#9991;</span><span className={styles.tapetwo}>&#9991;</span></span></h1>
      <button onClick={handleAnimation} className={styles.button}>Disclaimer</button>
      <div className={styles.textbox} id="textbox">
      <p>Greetings Explorer, a little disclaimer upfront:
      This is a portfolio project for the Codecademy Fullstack Engineer Career Path.
      The scope was to create a React App in connection with the Spotify API.
      This app is limited to a track search, but you can also enter albums or artists and you will
      always get the most popular track.<br/> I encourage you also to just type in random words, you never know what music you will discover.
      Aside from that you can create your own playlists and save them to your Spotify account. Check it out and have fun.</p>
      </div>
      <SearchBar getSearch={getSearch} />
      <div className={styles.flexColumns}>
        <SearchResults tracks={input} getTrack={getTrack} />
        <Playlist playlist={playlist} onRemoveTrack={removeTrackFromPlaylist} />
      </div>
      </div>
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