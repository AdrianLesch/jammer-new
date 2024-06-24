import React, { useState } from 'react';
import SearchResults from './SearchResults/SearchResults';
import TRACK from './TRACK';




function App(){

  const [search, setSearch] = useState([]);

  return(
    <>
    <SearchResults tracks={TRACK} />
    </>
  )
}

export default App;