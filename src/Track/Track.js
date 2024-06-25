import React from "react";
import styles from "./Track.module.css"

export default function Track({track, getAppClick}){


    return(
      <>
      <div className={styles.container}>
      Artist: {track.artist}
      <br />
      Song: {track.song}
      <br />
      Album: {track.album}
      <button type="button" onClick={(e) => getAppClick(true)}>+</button>
      </div>  
      
      </>
    )
  }