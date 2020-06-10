module.exports = (options, app) => {
    return async function robotMiddleware(ctx, next) {
      console.log('log start:'+ctx.path)
      await next();
      console.log('log end:'+ctx.path)
    }
  };