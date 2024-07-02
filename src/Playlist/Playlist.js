import React, { useState } from "react";
import Tracklist from "../Tracklist/Tracklist";

export default function Playlist({playlist, onRemoveTrack}) {
    const [playlistName, setPlaylistName] = useState("");
    
    
    function handleChange(e) {
        e.preventDefault();
        setPlaylistName(e.target.value);
    }

    return (
        <>
            <div style={{ border: "2px solid black", width: "fit-content", padding: "5px" }}>
                Playlist
                <form>
                    <input type="text" placeholder='Enter Playlistname' onChange={handleChange} />
                    <br />
                    {playlist.map((track, index) => (
                        <Tracklist key={index} track={track} index={index} onRemoveTrack={onRemoveTrack}  />
                    ))}
                    <br />
                    <button type='submit'>Save to Spotify</button>
                </form>
            </div>
        </>
    )
}