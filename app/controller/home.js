'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { title } = this.config.blog;
    this.ctx.body = `hello world ${title}`;
  }
}

module.exports = HomeController;
