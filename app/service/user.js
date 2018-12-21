'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async check(username, password) {
    if (username === 'dk' && password === 'qwer') {
      return {
        userName: username,
        userId: 12345567,
        avater: './abc.jpg',
      }
    }
    return false;
  }
}

module.exports = UserService;