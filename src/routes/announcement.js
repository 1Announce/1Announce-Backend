const express = require('express');
const router = express.Router();

/* GET /announcement */

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Announcement Info' });
});

/* POST /announcement */

router.post('/', (req, res) => {
    res.status(200).json({ message: 'Create Announcement Info' });
});


module.exports = router;