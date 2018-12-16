'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('login.tpl', {
      target: '/login',
    });
  }

  async user() {
    const { ctx } = this;
    console.log(ctx.request.body)
    const username = ctx.request.body.username;
    await ctx.render('login.tpl', {
      title: 'login success',
      name: username,
    });
  }
}

module.exports = LoginController;
