import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import TRACK from './TRACK';

function App() {

  const [input, setInput] = useState([]);

  function getSearch(track) {
    setInput(track);
  }

  console.log(input);

  return (
    <>
      <SearchBar getSearch={getSearch} />
      <SearchResults tracks={input} />
    </>
  )
}

export default App;