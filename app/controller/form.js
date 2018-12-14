'use strict';

const Controller = require('egg').Controller;

class FormController extends Controller {
  async post() {
    const str = JSON.stringify(this.ctx.request.body, {}, 2);
    console.log(str);
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

module.exports = FormController;
