import React, { useState, useEffect } from "react";
import Track from "../Track/Track";
import styles from "./SearchResults.module.css";

export default function SearchResults({ tracks , getTrack }) {
    const {id, name, artists, album, uri} = tracks;
    const tracklist = [id, name, [artists], [album], uri]

    const artistName = tracklist[2][0];
    
    console.log(tracklist);

  
    return (
        <>
            <div className={styles.container}>
                <h2>Search Results</h2>
              
            </div>
        </>
    );
}

/*
  {tracklist.map((track, index) => (
                    <Track key={index} track={track} getTrack={getTrack}/>
                ))}
                    */