import React from "react";
import styles from "./Tracklist.module.css"

export default function Tracklist({ track, index, onRemoveTrack }) {

  return (
    <>
      <div className={styles.container}>
        Artist: {track.artist}
        <br />
        Song: {track.song}        
        <br />
        Album: {track.album}
        <button type="button" onClick={() => onRemoveTrack(index)}>-</button>
      </div>

    </>
  )
}