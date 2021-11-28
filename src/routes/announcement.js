const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator'); 
const AnnouncementManager = require('../utils/announcement-manager');

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
    body('announcement')
        .exists(),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ message: 'Bad request', errors: errors.array() });

        const { userId, announcement } = req.body;

        try {
            AnnouncementManager.createAnnouncement(userId, announcement);
        } catch (err) {
            console.log("AnnouncementManager.createAnnouncement failed!", err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        res.status(200).json({ message: `Announcement ${announcement.id} created` });
});


module.exports = router;