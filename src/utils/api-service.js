const axios = require('axios');
const { from } = require('rxjs');

class ApiService {
    static SERVICE_URL = 'http://localhost:5050/';

    static getAnnouncements() {
        return from( axios.get(this.SERVICE_URL + 'announcements') );
    }

    static postAnnouncement(data) {
        return from( axios.post(this.SERVICE_URL + 'announcements', data) );
    }
}

module.exports = ApiService;