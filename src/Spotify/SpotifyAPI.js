//This component is responsible for the Spotify API. It fetches data from the Spotify API and sends data to the Spotify API.

import { useEffect, useState } from 'react';

export default function SpotifyAPI({ sendSearch, getSearch, createPlaylist, uri, publicPlaylist }) {
    const [accessToken, setAccessToken] = useState("");
    const [userId, setUserId] = useState("");
    const [playlistId, setPlaylistId] = useState("");

    //console.log(uri);

    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const CLIENT_SECRECT = process.env.REACT_APP_CLIENT_SECRET;

    //Authentication-fetching
    useEffect(() => {
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);
        const token = params.get('access_token');

        if (token) {
            setAccessToken(token);
        } else {
            const scope = 'user-read-private user-read-email playlist-modify-public playlist-modify-private';
            var authUrl = 'https://accounts.spotify.com/authorize';
            authUrl += '?response_type=token';
            authUrl += '&show_dialog=true';
            authUrl += '&client_id=' + encodeURIComponent(CLIENT_ID);
            authUrl += '&redirect_uri=' + encodeURIComponent('http://localhost:3000/');
            authUrl += '&scope=' + encodeURIComponent(scope);
        
            window.location = authUrl;
        }
    }, []);

    //GetSearch-Data 
    useEffect(() => {
        var artistParameters = { method: 'GET', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + accessToken } }
        var artistID = fetch('https://api.spotify.com/v1/search?q=' + sendSearch + '&type=track', artistParameters)
            .then(response => response.json())
            .then(data => getSearch(data.tracks.items[0]))
            .catch(error => console.log('Either nothing was searched yet or the search was invalid'))
    }, [sendSearch]);

    //GetUserId
    useEffect(() => {
        var userData = { method: 'GET', headers: { 'Authorization': 'Bearer ' + accessToken } }
        if (accessToken) {
            var currentUser = fetch('https://api.spotify.com/v1/me', userData)
                .then(response => response.json())
                .then(data => setUserId(data.id))
        }
    }, [accessToken]);

    //console.log(userId);

    //Playlist-Creation-Function
    const setPlaylist = (playlistName) => {
        var playlistData = { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + accessToken }, 
        body: JSON.stringify({ name: playlistName, public: publicPlaylist }) }

        if (accessToken) {
            fetch('https://api.spotify.com/v1/users/' + userId + '/playlists', playlistData)
                .then(response => response.json())
                
                .then(data => setPlaylistId(data.id))
                .catch(error => console.error("Error:", error))
        }
    }

    useEffect(() => {
        if (accessToken && userId) {
         setPlaylist(createPlaylist)
        };
    }, [createPlaylist]);

    //AddTracks-Function
    const addTracks = (playlistID) => {
        var trackData = { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + accessToken },
        body: JSON.stringify({ uris: uri }) }

        if (accessToken) {
            fetch('https://api.spotify.com/v1/playlists/' + playlistId + '/tracks', trackData)
                .then(response => response.json())
                .then(data => console.log(data))
        }
}

    useEffect(() => {
            addTracks(playlistId);
    }, [playlistId]);
}


