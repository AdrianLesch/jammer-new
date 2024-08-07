//This component is responsible for the search results. It displays the search results in a list.

import React from "react";
import Track from "../Track/Track";
import styles from "./SearchResults.module.css";

export default function SearchResults({ tracks, getTrack }) {
    // Checks if tracks has the necessary properties before destructuring
    if (!tracks || !tracks.artists || tracks.artists.length === 0) {
        // Returns null or some placeholder if tracks is not in the expected format
        return <div className={styles.container}><h2>Search Results</h2>No results found yet.</div>;
    }

    const { id, name, artists, album, uri } = tracks;
    const tracklist = [id, name, artists[0].name, album.name, album.images[0], uri];

    return (
        <>
            <div className={styles.container}>
                <h2>Search Results</h2>
                <Track track={tracklist} getTrack={getTrack} />
            </div>
        </>
    );
}

