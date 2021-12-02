const Utils = require('./utils');
const ApiService = require('./api-service');

class ApiManager {

    static announcements = [];
    static users = [];

    static getAnnouncements() {
        const observable = ApiService.getAnnouncements();
        observable.subscribe({
            next: ret => {
                console.log('ApiManager.getAnnouncements: Data retrieved!');
                this.announcements = ret.data;
            },
            error: err => {
                console.log('ApiManager.getAnnouncements: Failed to get announcements');
                console.log('ApiManager.getAnnouncements: err =', err);
            }
        });
        return observable;
    }

    static createAnnouncement(userId, announcement) {
        const data = {
            id: announcement.id,
            messages: announcement.messages,
            schedule: announcement.schedule,
            userId: userId,
            createTime: Date.now()
        }

        ApiService.postAnnouncement(data);
    }
}

module.exports = ApiManager;