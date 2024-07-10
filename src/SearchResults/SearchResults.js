import React, { useState } from "react";
import Track from "../Track/Track";
import styles from "./SearchResults.module.css";

export default function SearchResults({ tracks, getTrack }) {
    console.log([tracks.id, tracks.name, tracks.artists[0], tracks.album, tracks.uri]);
    
    /*
    const [trackList, setTrackList] = useState(tracks.map(track => ({
        id: track.id, // Assuming each track has an album object with an id
        name: track.name, // Assuming each track has a name
        artist: track.artist, // Assuming each track has an artist
        album: track.album.name, // Assuming each track's album has a name
        uri: track.uri // Assuming each track has a uri
    })));
    */
  
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