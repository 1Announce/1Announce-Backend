const AwsManager = require("./aws-manager");
const ApiManager = require("./api-manager");
const Utils = require("./utils");

class AnnouncementManager {

    static createAnnouncement(userId, announcement) {
        console.log("UserId=", userId);
        console.log("Announcement=", announcement);

        announcement.id = Utils.getUniqueId();

        AwsManager.createEvent(announcement);
        ApiManager.createAnnouncement(userId, announcement);
    }
}

module.exports = AnnouncementManager;