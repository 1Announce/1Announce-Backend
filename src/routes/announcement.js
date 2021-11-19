const express = require('express');
const router = express.Router();

const { query, body, validationResult } = require('express-validator'); 
const ApiManager = require('../api/api-manager');

/* GET /announcement ?aId= */

router.get(
    '/',
    (req, res) => {
    res.status(200).json({ message: 'Announcement Info' });
});

/* POST /announcement */
// body { userId, content }

router.post(
    '/',
    body('userId')
        .isString(),
    body('content')
        .isArray(),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ message: 'Bad request', errors: errors.array() });

        const { userId, content } = req.body;

        const announcement = ApiManager.createAnnouncement(userId, content);
        res.status(200).json({ message: `Announcement ${announcement.aId} created` });

        // ApiManager.createAnnouncement(userId, content).subscribe({
        //     next: announcement => {
        //         res.status(200).json({ message: `Announcement ${announcement.aId} created` });
        //     },
        //     error: err => {
        //         res.status(500).json({ message: `Failed to create announcement` });
        //     }
        // });
});


module.exports = router;