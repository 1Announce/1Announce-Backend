const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Group A API 😸' });
});

// Fetch Announcement
app.get('/announcement', (req, res) => {
    res.status(200).json({ message: 'Announcement Info' });
});

// Create/Update Announcement
app.post('/announcement', (req, res) => {
    res.status(200).json({ message: 'Create Announcement Info' });
});

// Fetch all announcements
app.get('/announcements', (req, res) => {
    res.status(200).json({ message: 'Get All Announcement Info' });
});

module.exports = app;