import React from "react";
import styles from "./Track.module.css"

export default function Track({ track, getTrack }) {

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
        <img className={styles.img} src={track[4].url} alt="album cover" />
        <button type="button" onClick={() => getTrack(track)}>+</button>
      </div>

    </>
  )
}