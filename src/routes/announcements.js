const express = require('express');
const router = express.Router();

const ApiManager = require('../api/api-manager');

/* GET /announcements */

router.get('/', (req, res) => {
    console.log()

    ApiManager.getAnnouncements().subscribe({
        next: () => {
            res.status(200).json({ message: 'OK', announcements: ApiManager.announcements });
        },
        error: err => {
            res.status(500).json({ message: 'Could not load announcements' });
        }
    });
});

module.exports = router;