//This component is responsible for the search bar and the search button. It also sends the search query to the SpotifyAPI component.

import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import SpotifyAPI from "../Spotify/SpotifyAPI";

export default function SearchBar({ getSearch }) {

    const [search, setSearch] = useState("");
    const [sendSearch, setSendSearch] = useState("");

    function handleChange(e) {
        e.preventDefault();
        setSearch(e.target.value.toLowerCase());
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSendSearch(search);
    }

    return (
        <>
            <form onSubmit={handleSubmit} name="Search" className={styles.container}>
                <input type="search" placeholder='Enter search here...' onChange={handleChange} className={styles.input}/>
                <button type="submit" className={styles.button}>Search</button>
                <SpotifyAPI sendSearch={sendSearch} getSearch={getSearch} />
            </form>
        </>
    )
}


/*
    //Maybe for later use:
    function handleSubmit(e) {
        e.preventDefault();
        const searchElement = TRACK.filter((entry) => 
            Object.values(entry).some(val =>
                typeof val === "string" && val.toLowerCase().includes(search.toLowerCase())
            )
        );
    
        getSearch(searchElement);
    }

*/