const express = require('express');
const router = express.Router();

/* GET /announcement */

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Announcement Info' });
});

/* POST /announcement */

router.post('/', (req, res) => {
    // Extract announcement data from body
    // 400 ERROR if bad body data

    // Invoke ApiManager.createAnnouncement
    // 200 OK
    // 500 ERROR

    res.status(200).json({ message: 'Create Announcement Info' });
});


module.exports = router;