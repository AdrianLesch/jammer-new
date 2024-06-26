import React, { useState, useEffect } from "react";
import Tracklist from "../Tracklist/Tracklist";

export default function Playlist( {playlist} ) {

    const [playlistName, setPlaylistName] = useState("");
    const [tracklist, setTracklist] = useState([]);
    const [remove, setRemove] = useState(false);

    function handleChange(e) {
        e.preventDefault();
        setPlaylistName(e.target.value);
    }

    useEffect(() => {
        setTracklist(playlist);
    }, [playlist])

    //console.log(tracklist);

    function getRemove(bool){
        setRemove(bool);
    }

    const deleteById = index => {
        setTracklist((prev) =>  prev.filter((item) => item.index !== index));
    }

    useEffect(() => {
        if(remove){
            deleteById(tracklist.index);
        }
        
    }, [remove, tracklist])


    return (
        <>
            <div style={{ border: "2px solid black", width: "fit-content", padding: "5px" }}>
                Playlist
                <form>
                    <input type="text" placeholder='Enter Playlistname' onChange={handleChange} />
                    <br />
                    {tracklist.map((track, index) => (
                    <Tracklist key={index} track={track} getRemove={getRemove} />
                ))}
                    <br />
                    <button type='submit'>Save to Spotify</button>
                </form>
            </div>
        </>
    )
}