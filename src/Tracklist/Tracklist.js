//This component is responsible for the tracklist. It displays the tracklist in a list.

import React from "react";
import styles from "./Tracklist.module.css"

export default function Tracklist({ track, index, onRemoveTrack }) {

  return (
    <>
      <div className={styles.container}>
        Song: {track[1]}
        <br />
        Artist: {track[2]}
        <br />
        Album: {track[3]}
        <br />
        <img className={styles.img} src={track[4].url} alt="album cover" />
        <button type="button" onClick={() => onRemoveTrack(index)}>-</button>
      </div>
    </>
  )
}