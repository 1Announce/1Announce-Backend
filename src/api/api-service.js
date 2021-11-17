const axios = require('axios');
const { from } = require('rxjs');

class ApiService {
    static SERVICE_URL = 'http://localhost:3000/';

    static getAnnouncements() {
        return from( axios.get(this.SERVICE_URL + 'announcements') );
    }

    static getUsers() {
        return from( axios.get(this.SERVICE_URL + 'users') );
    }
}

module.exports = ApiService;