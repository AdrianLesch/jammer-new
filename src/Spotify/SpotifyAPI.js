import { useEffect, useState } from 'react';

export default function SpotifyAPI({ sendSearch, getSearch}) {
    const [accessToken, setAccessToken] = useState("");
    

    
    const CLIENT_ID = "3018fe9acf7d4fcfb25b96e1d2b84853";
    const CLIENT_SECRECT = "241ba7d436564a97b94efb0b5de1ba80";

    useEffect(() => {
        //API-Access Token / Authentication
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRECT + '&redirect_uri=http://localhost:3000'
        }
        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(response => response.json())
            .then(data => {
                setAccessToken(data.access_token);
            })
    }, [])

    useEffect(() => {
        var artistParameters = { method: 'GET', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + accessToken } }
        var artistID = fetch('https://api.spotify.com/v1/search?q=' + sendSearch + '&type=track', artistParameters)
        .then(response => response.json())
        .then(data => getSearch(data.tracks.items[0]))
        .catch(error => console.log('Either nothing was searched for yet or the search was invalid'))
    }, [sendSearch]);
}