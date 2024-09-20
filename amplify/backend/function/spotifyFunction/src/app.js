const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const qs = require('querystring');

// Express App
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // Adjust the origin as needed
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

// Spotify Credentials from Environment Variables
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

let accessToken = null;
let tokenExpiresAt = null;

// Function to get access token
async function getAccessToken() {
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const data = qs.stringify({ grant_type: 'client_credentials' });
  const authHeader = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

  const response = await axios.post(tokenUrl, data, {
    headers: {
      'Authorization': `Basic ${authHeader}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  accessToken = response.data.access_token;
  tokenExpiresAt = Date.now() + response.data.expires_in * 1000;
}

// Middleware to ensure access token is valid
async function ensureAccessToken(req, res, next) {
  if (!accessToken || Date.now() >= tokenExpiresAt) {
    try {
      await getAccessToken();
    } catch (error) {
      console.error('Error obtaining access token:', error);
      return res.status(500).json({ error: 'Failed to obtain access token' });
    }
  }
  next();
}

// Routes
app.get('/search', ensureAccessToken, async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: 'Missing query parameter "q"' });
  }

  try {
    const response = await axios.get('https://api.spotify.com/v1/search', {
      headers: { 'Authorization': `Bearer ${accessToken}` },
      params: {
        q: query,
        type: 'track',
        limit: 10,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error searching tracks:', error.response.data);
    res.status(error.response.status).json(error.response.data);
  }
});

app.get('/audio-analysis/:id', ensureAccessToken, async (req, res) => {
  const trackId = req.params.id;

  try {
    const response = await axios.get(`https://api.spotify.com/v1/audio-analysis/${trackId}`, {
      headers: { 'Authorization': `Bearer ${accessToken}` },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error getting audio analysis:', error.response.data);
    res.status(error.response.status).json(error.response.data);
  }
});

app.get('/audio-features/:id', ensureAccessToken, async (req, res) => {
  const trackId = req.params.id;

  try {
    const response = await axios.get(`https://api.spotify.com/v1/audio-features/${trackId}`, {
      headers: { 'Authorization': `Bearer ${accessToken}` },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error getting audio features:', error.response.data);
    res.status(error.response.status).json(error.response.data);
  }
});

// Export the app object for the Lambda handler
module.exports = app;
