import React, { useState } from 'react';
import SearchResults from './SearchResults/SearchResults';
import TRACK from './TRACK';

function Search({getSearch}){

  const [search, setSearch] = useState(null);

  function handleChange(e){
    setSearch(e.target.value);
  }


  function handleSubmit(){
    getSearch(search);
  }


  return(
    <>
    <form onSubmit={handleSubmit} name="Search">
      <input type="search" placeholder='Enter search here...' onChange={handleChange}/>
      <button type="submit">Search</button>
    </form>
    </>
  )
}


function App(){

  const [track, setTrack] = useState("");

  function getSearch(trackSearch){
    setTrack(trackSearch);
  }

  console.log(track);

  return(
    <>
    <Search getSearch={getSearch}/>
    <SearchResults tracks={TRACK} />
    </>
  )
}

export default App;