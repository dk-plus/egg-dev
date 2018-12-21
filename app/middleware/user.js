'use strict';

module.exports = (options, app) => {
  return async function check(ctx, next) {
    const username = ctx.cookies.get('username');
    const password = ctx.cookies.get('password',{ 
      encrypt: true 
    });

    const user = await ctx.service.user.check(username, password);

    const whiteUrl = options.whiteList.some(item => item.test(ctx.request.url));

    // 白名单忽略
    if (whiteUrl) {
      await next();
      return;
    }

    // 用户验证失败
    if (!user) {
      ctx.redirect('/login');
      return;
    }

    // 用户验证成功
    if (user) {
      await next();
    }
  }
}