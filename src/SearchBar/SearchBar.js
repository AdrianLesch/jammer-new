import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import TRACK from "../TRACK";

export default function SearchBar({ getSearch }) {

    const [search, setSearch] = useState("");

    function handleChange(e) {
        e.preventDefault();
        setSearch(e.target.value);
    }


    function handleSubmit(e) {
        e.preventDefault();
        const searchElement = TRACK.filter((entry) => 
            Object.values(entry).some(val =>
                typeof val === "string" && val.toLowerCase().includes(search.toLowerCase())
            )
        );
    
        getSearch(searchElement);
    }

    return (
        <>
            <form onSubmit={handleSubmit} name="Search" className={styles.container}>
                <input type="search" placeholder='Enter search here...' onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
        </>
    )
}