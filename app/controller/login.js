'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('login.tpl', {
      title: 'login',
      target: '/login',
    });
  }

  async user() {
    const { ctx } = this;
    console.log(ctx.request.body)

    const username = ctx.request.body.username;
    const password = ctx.request.body.password;

    const user = await this.service.user.check(username, password);
    if (user) {
      const minute = 60000;
      ctx.cookies.set('username', username, { 
        maxAge: minute 
      });
      ctx.cookies.set('password', password, {
        maxAge: minute,
        encrypt: true, 
      });
      ctx.body = {
        code: '0',
        data: user
      }
    } else {
      ctx.body = {
        code: '403',
        errorMessage: '用户不存在或密码错误'
      }
    }
  }
}

module.exports = LoginController;
