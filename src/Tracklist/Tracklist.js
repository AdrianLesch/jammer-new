import React from "react";
import styles from "./Tracklist.module.css"

export default function Tracklist({ track, index, onRemoveTrack }) {

  return (
    <>
      <div className={styles.container}>
        <br />
        Song: {track[1]}
        <br />
        Artist: {track[2]}
        <br />
        Album: {track[3]}
        <br />
        ID: {track[0]}
        <br />
        URI: {track[4]}
        <button type="button" onClick={() => onRemoveTrack(index)}>-</button>
      </div>
    </>
  )
}