'use strict';

const isJSON = require('koa-is-json');
const zlib = require('zlib');

module.exports = (options, app) => {
  return async function gzip(ctx, next) {
    await next();

    let body = ctx.body;
    if (!body) return;

    // console.log(ctx.get('Accept-Encoding'))

    if (options.threshold && ctx.length < options.threshold) return;
    console.log('gzip===========', ctx.url, ctx.length, '>', options.threshold)

    if (isJSON(body)) body = JSON.stringify(body);

    const stream = zlib.createGzip();
    stream.end(body);
    ctx.body = stream;
    ctx.set('Content-Encoding', 'gzip');
  }
}