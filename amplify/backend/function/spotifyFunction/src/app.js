const axios = require('axios');

let cachedAccessToken = null;
let tokenExpiryTime = 0;

async function getSpotifyAccessToken() {
    if (cachedAccessToken && Date.now() < tokenExpiryTime) {
        console.log('Using cached token');
        return cachedAccessToken;
    }
    console.log('Fetching new token');
    const tokenResponse = await axios.post(
        'https://accounts.spotify.com/api/token',
        new URLSearchParams({ grant_type: 'client_credentials' }),
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`
            }
        }
    );
    if (tokenResponse.status === 200) {
        cachedAccessToken = tokenResponse.data.access_token;
        tokenExpiryTime = Date.now() + tokenResponse.data.expires_in * 1000; // expires_in is in seconds
        return cachedAccessToken;
    } else {
        throw new Error('Failed to obtain access token');
    }
}

exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    const searchQuery = event.queryStringParameters?.q;

    if (!searchQuery) {
        console.log('Missing search query');
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Missing search query parameter' }),
        };
    }

    try {
        console.log('Start getting Spotify token:', new Date().toISOString());
        const accessToken = await getSpotifyAccessToken();
        console.log('Token obtained:', new Date().toISOString());

        console.log('Start searching Spotify:', new Date().toISOString());
        const response = await axios.get('https://api.spotify.com/v1/search', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                q: searchQuery,
                type: 'track',
                limit: 10
            }
        });
        console.log('Search completed:', new Date().toISOString());

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(response.data)
        };
    } catch (error) {
        console.error('Error during Spotify request:', error.message);
        console.error('Error details:', error.response?.data || error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Failed to fetch data from Spotify',
                details: error.message
            }),
        };
    }
};
