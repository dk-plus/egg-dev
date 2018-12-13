'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { title } = this.config.blog;
    const { id } = this.ctx.query;
    this.ctx.body = `hello world ${title}. userId: ${id}`;
  }
}

module.exports = HomeController;
