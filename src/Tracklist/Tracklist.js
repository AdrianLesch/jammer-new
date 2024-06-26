import React from "react";
import styles from "./Tracklist.module.css"

export default function Tracklist({ track, getTrackRemove }) {

  return (
    <>
      <div className={styles.container}>
        Artist: {track.artist}
        <br />
        Song: {track.song}        
        <br />
        Album: {track.album}
        <button type="button" onClick={(e) => getTrackRemove(track)}>-</button>
      </div>

    </>
  )
}