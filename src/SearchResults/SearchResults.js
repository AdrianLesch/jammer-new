import React, { useState } from "react";
import Track from "../Track/Track";
import styles from "./SearchResults.module.css";

export default function SearchResults({ tracks, getAppClick }) {
  
    return (
        <>
            <div className={styles.container}>
                <h2>Search Results</h2>
                {tracks.map((track, index) => (
                    <Track key={index} track={track} getAppClick={getAppClick}/>
                ))}
            </div>
        </>
    );
}