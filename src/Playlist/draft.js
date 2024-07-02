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