import React from "react";
import styles from "./Track.module.css"

export default function Track({ track, getTrack }) {


  return (
    <>
      <div className={styles.container}>
        ID: {track.id}
        <br />
        Song: {track.name}
        <br />
        Artist: {track.artist}
        <br />
        Album: {track.album}
        <br />
        URI: {track.uri}
        <button type="button" onClick={() => getTrack(track)}>+</button>
      </div>

    </>
  )
}