import React, { useState, useEffect } from "react";
import Tracklist from "../Tracklist/Tracklist";

export default function Playlist(props) {
    const { playlist } = props;

    const [playlistName, setPlaylistName] = useState("");
    const [tracklist, setTracklist] = useState([]);
    
    function handleChange(e) {
        e.preventDefault();
        setPlaylistName(e.target.value);
    }

    useEffect(() => {
        setTracklist(playlist);
    }, [playlist])

    function getTrackRemove(trackToRemove) {
        setTracklist((prev) => prev.filter((track) => track.id !== trackToRemove.id));
    }


    return (
        <>
            <div style={{ border: "2px solid black", width: "fit-content", padding: "5px" }}>
                Playlist
                <form>
                    <input type="text" placeholder='Enter Playlistname' onChange={handleChange} />
                    <br />
                    {tracklist.map((track) => (
                        <Tracklist key={track.id} track={track} getTrackRemove={getTrackRemove} />
                    ))}
                    <br />
                    <button type='submit'>Save to Spotify</button>
                </form>
            </div>
        </>
    )
}