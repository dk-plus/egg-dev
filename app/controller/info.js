'use strict';

const Controller = require('egg').Controller;

class InfoController extends Controller {
  async data() {
    this.ctx.body = {
      returnCode: 20,
      returnValue: {
        content: {
          id: 123,
          name: 'dkplus'
        }
      }
    }
  }
}

module.exports = InfoController;
