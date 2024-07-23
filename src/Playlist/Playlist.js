import React, { useState, useEffect } from "react";
import SpotifyAPI from "../Spotify/SpotifyAPI";
import Tracklist from "../Tracklist/Tracklist";

export default function Playlist({ playlist, onRemoveTrack, getPlaylist }) {
    const [playlistName, setPlaylistName] = useState("");
    const [createPlaylist, setCreatePlaylist] = useState("");


    function handleChange(e) {
        e.preventDefault();
        setPlaylistName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setCreatePlaylist(playlistName);
        alert("Playlist saved to Spotify");
    }

    return (
        <>
            <div style={{ border: "2px solid black", width: "fit-content", padding: "5px" }}>
                Playlist
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter Playlistname' onChange={handleChange} />
                    <br />
                    {playlist.map((track, index) => (
                        <Tracklist key={index} track={track} index={index} onRemoveTrack={onRemoveTrack} />
                    ))}
                    <br />
                    <button type='submit'>Save to Spotify</button>
                </form>
            <SpotifyAPI createPlaylist={createPlaylist}/>
            </div>
        </>
    )
}

/*
useEffect(() => {
        getPlaylist(playlistTracks);
    }, [playlistTracks]);
*/