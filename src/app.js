const express = require('express');
const cors = require('cors');

const app = express();

// Configuration
app.use(express.json());
app.use(cors());

// Routes
app.use('/', require('./routes/index'));
app.use('/announcement', require('./routes/announcement'));
app.use('/announcements', require('./routes/announcements'));
app.use('/users', require('./routes/users'));

module.exports = app;