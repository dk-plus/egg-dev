'use strict';

const Controller = require('egg').Controller;

class SearchController extends Controller {
  async index() {
    // this.ctx.body = {
    //   returnCode: 20,
    //   returnValue: {
    //     content: {
    //       id: 123,
    //       name: 'dkplus'
    //     }
    //   }
    // }
    this.ctx.body = `search: ${this.ctx.query.name}`
  }
}

module.exports = SearchController;
