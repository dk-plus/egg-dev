'use strict';

module.exports = (options, app) => {
  return async function loginUser(ctx, next) {
    await next();

    const body = ctx.request.body;
    console.log(body);
  }
}