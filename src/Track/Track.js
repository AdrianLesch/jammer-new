import React from "react";
import styles from "./Track.module.css"

export default function Track({ track, getTrack }) {
  const { id, name, artists, album, uri } = track;
  const tracks = [id, name, artists, album, uri];

  return (
    <>
      <div className={styles.container}>
        ID: {track.id}
        <br />
        Song: {track.name}
        <br />
        Artist: {track.artists}
        <br />
        Album: {track.album}
        <br />
        URI: {track.uri}
        <button type="button" onClick={() => getTrack(track)}>+</button>
      </div>

    </>
  )
}