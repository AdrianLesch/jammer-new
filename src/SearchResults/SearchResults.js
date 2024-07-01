import React, { useState } from "react";
import Track from "../Track/Track";
import styles from "./SearchResults.module.css";

export default function SearchResults({ tracks, getTrack }) {
  
    return (
        <>
            <div className={styles.container}>
                <h2>Search Results</h2>
                {tracks.map((track, index) => (
                    <Track key={index} track={track} getTrack={getTrack}/>
                ))}
            </div>
        </>
    );
}