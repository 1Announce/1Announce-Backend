const { v4 } = require('uuid');

class Utils {
    /* Constants */

    static PENDING = 0;
    static COMPLETED = 1;

    /* Functions */

    static getUniqueId() { return v4(); }

    static numberToCron(datetime) {
        const date = new Date(datetime);
        const mins = date.getUTCMinutes();
        const hrs = date.getUTCHours();
        const dayMonth = date.getUTCDate();
        const month = date.getUTCMonth() + 1;
        const dayWeek = "?";
        const year = date.getUTCFullYear(); 
        const cron = `cron(${mins} ${hrs} ${dayMonth} ${month} ${dayWeek} ${year})`;
        console.log(date.toLocaleString(), date.getTime(), cron)
        return cron;
    }
}

module.exports = Utils;