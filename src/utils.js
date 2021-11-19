const { v4 } = require('uuid');

class Utils {
    /* Constants */

    static PENDING = 0;
    static COMPLETED = 1;

    /* Functions */

    static generateAnnouncementId() { return v4(); }
}

module.exports = Utils;