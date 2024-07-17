import { useEffect, useState } from 'react';

export default function SpotifyAPI({ sendSearch, getSearch }) {
    const [accessToken, setAccessToken] = useState("");
    const [userId, setUserId] = useState("");
    
   

    const CLIENT_ID = "3018fe9acf7d4fcfb25b96e1d2b84853";
    const CLIENT_SECRECT = "241ba7d436564a97b94efb0b5de1ba80";

    //Authentication-fetching
    useEffect(() => {
        const scope = 'user-read-private user-read-email';
    
        var authUrl = 'https://accounts.spotify.com/authorize';
        authUrl += '?response_type=token';
        authUrl += '&client_id=' + encodeURIComponent(CLIENT_ID);
        authUrl += '&redirect_uri=' + encodeURIComponent('http://localhost:3000/');
        authUrl += '&scope=' + encodeURIComponent(scope);
        
        window.location = authUrl; 

        setAccessToken(() => {const hash = window.location.hash.substring(1);
            const params = new URLSearchParams(hash);
            return params.get('access_token')});
    }, []);

 

    //GetSearch-Data -->>>>Das muss in die SearchBar Component auf onClick!!!
    useEffect(() => {
        var artistParameters = { method: 'GET', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + accessToken } }
        var artistID = fetch('https://api.spotify.com/v1/search?q=' + sendSearch + '&type=track', artistParameters)
            .then(response => response.json())
            .then(data => getSearch(data.tracks.items[0]))
            .catch(error => console.log('Either nothing was searched yet or the search was invalid'))
    }, [sendSearch]);

    //GetUserId
    useEffect(() => {
        var userData = { method: 'GET', headers: { 'Authorization': 'Bearer ' +  accessToken } }
        if (accessToken) {
            var currentUser = fetch('https://api.spotify.com/v1/me', userData)
                .then(response => response.json())
                .then(data => console.log(data) )
        }
    }, [accessToken]);
}

/*
   useEffect(() => {
        const scope = 'user-read-private user-read-email';
    
        var authUrl = 'https://accounts.spotify.com/authorize';
        authUrl += '?response_type=token';
        authUrl += '&client_id=' + encodeURIComponent(CLIENT_ID);
        // Ensure this URI is exactly the same as the one registered in your Spotify app settings
        authUrl += '&redirect_uri=' + encodeURIComponent('http://localhost:3000/');
        authUrl += '&scope=' + encodeURIComponent(scope);
        
        window.location = authUrl; // Redirect user to Spotify authorization page

        setAccessToken(() => {const hash = window.location.hash.substring(1);
            const params = new URLSearchParams(hash);
            return params.get('access_token')});
    }, []);
*/




