const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();

// Load environment variables from .env file
dotenv.config();

// Serve static files (like your HTML, CSS, and JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

//Investigate this block of code. Break it down and understand.
app.get('/debug', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/scripts/scrollEffects.js'));
});

// Endpoint to provide API key
app.get('/api/key', (req, res) => {
  res.json({ apiKey: process.env.GOOGLE_MAPS_API_KEY });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

/*2. Clarifying app.get('/api/key') and Its Role
The app.get('/api/key', ...) function in server.js does two things:

1. Defines a Route:

It creates a path /api/key that the frontend can "visit" or send a request to.
Think of it as a virtual folder structure on your server.

2. Handles the Request:

When a client (like loadApi.js) sends a request to /api/key, the server responds with a JSON object containing the API key from process.env.GOOGLE_MAPS_API_KEY.
So, the app.get function sets up the "server-side fetch." It does get the key, but not from somewhere like a database—it fetches it from the environment variables (process.env). This key is not stored in the route itself but is "retrieved" from the .env file dynamically whenever the /api/key route is hit.*/