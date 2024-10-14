const axios = require('axios');

exports.handler = async (event) => {
  const queryParams = event.queryStringParameters || {};
  const path = event.path || '';

  // Function to get Spotify access token
  async function getAccessToken() {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const token = Buffer.from(`${clientId}:${clientSecret}`, 'utf8').toString('base64');

    const response = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      data: 'grant_type=client_credentials',
      headers: {
        Authorization: `Basic ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return response.data.access_token;
  }

  try {
    const accessToken = await getAccessToken();

    if (path.endsWith('/search')) {
      // Handle search request
      const query = queryParams.q;
      const response = await axios.get('https://api.spotify.com/v1/search', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          q: query,
          type: 'track',
          limit: 10,
        },
      });

      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(response.data),
      };
    } else if (path.endsWith('/track')) {
      // Handle track details request
      const trackId = queryParams.id;

      // Fetch audio features and audio analysis in parallel
      const [featuresResponse, analysisResponse] = await Promise.all([
        axios.get(`https://api.spotify.com/v1/audio-features/${trackId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
        axios.get(`https://api.spotify.com/v1/audio-analysis/${trackId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
      ]);

      const data = {
        features: featuresResponse.data,
        analysis: analysisResponse.data,
      };

      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
    } else {
      // Invalid path
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ message: 'Invalid endpoint' }),
      };
    }
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};
