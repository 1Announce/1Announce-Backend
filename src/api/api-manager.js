const Utils = require('../utils');
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

    static getUsers() {
        const observable = ApiService.getUsers();
        observable.subscribe({
            next: ret => {
                console.log('ApiManager.getUsers: Data retrieved!');
                this.users = ret.data;
            },
            error: err => {
                console.log('ApiManager.getUsers: Failed to get users');
                console.log('ApiManager.getUsers: err =', err);
            }
        });
        return observable;
    }

    static createAnnouncement(userId, content) {
        let announcement = {
            userId: userId,
            content: content,
            createTime: Date.now(),
            aId: Utils.generateAnnouncementId(),
            status: Utils.PENDING
        }

        return announcement;

        // Create DB entry
        // Create EventBridge Event

        // const observable = ApiService.createAnnouncement(announcement);
        // observable.subscribe({
        //     next: () => {

        //     },
        //     error: (err) => {

        //     }
        // });
        // return observable;
    }

    static 
}

module.exports = ApiManager;