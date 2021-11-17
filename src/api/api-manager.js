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

    static createAnnouncement(announcement) {
        // Create DB entry
        // Create EventBridge Event
    }
}

module.exports = ApiManager;