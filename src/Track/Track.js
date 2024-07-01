import React from "react";
import styles from "./Track.module.css"

export default function Track({ track, getTrack }) {


  return (
    <>
      <div className={styles.container}>
        Artist: {track.artist}
        <br />
        Song: {track.song}
        <br />
        Album: {track.album}
        <button type="button" onClick={() => getTrack([track])}>+</button>
      </div>

    </>
  )
}