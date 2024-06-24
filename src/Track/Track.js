import React from "react";
import styles from "./Track.module.css"

export default function Track({track}){
    return(
      <>
      <div className={styles.container}>
      Artist: {track.artist};
      Song: {track.song};
      Album: {track.album};
      </div>  
      </>
    )
  }