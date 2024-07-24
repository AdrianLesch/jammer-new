import React, { useState, useEffect } from "react";
import SpotifyAPI from "../Spotify/SpotifyAPI";
import Tracklist from "../Tracklist/Tracklist";

export default function Playlist({ playlist, onRemoveTrack }) {
    const [playlistName, setPlaylistName] = useState("");
    const [createPlaylist, setCreatePlaylist] = useState("");
    const [uri, setUri] = useState([]);
    const [publicPlaylist, setPublicPlaylist] = useState(false);


    function handleChange(e) {
        e.preventDefault();
        setPlaylistName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setCreatePlaylist(playlistName);
        alert("Playlist saved to Spotify");
    }

    function handlePublic(e) { 
        setPublicPlaylist(e.target.checked  ? true : false);
    }

    console.log(publicPlaylist);

    useEffect(() => { 
        setUri(playlist.map((track) => track[5]));
    }, [playlist]);




    return (
        <>
            <div style={{ border: "2px solid black", width: "fit-content", padding: "5px" }}>
                <h2>Playlist</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter Playlistname' onChange={handleChange} />
                    <br />
                    {playlist.map((track, index) => (
                        <Tracklist key={index} track={track} index={index} onRemoveTrack={onRemoveTrack} />
                    ))}
                    <br />
                    <button type='submit'>Save to Spotify</button>
                    Public
                    <input onChange={handlePublic} type="checkbox" />
                </form>
            <SpotifyAPI createPlaylist={createPlaylist} uri={uri} publicPlaylist={publicPlaylist}/>
            </div>
        </>
    )
}

/*
useEffect(() => {
        getPlaylist(playlistTracks);
    }, [playlistTracks]);
*/