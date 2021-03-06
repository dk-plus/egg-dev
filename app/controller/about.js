'use strict';

const Controller = require('egg').Controller;

class AboutController extends Controller {
  async index() {
    const { ctx } = this;

    await ctx.render('about.tpl', {title:'about'});
  }
}

module.exports = AboutController;
