module.exports = (options, app) => {
    return async function robotMiddleware(ctx, next) {
        const match = ctx.query.id == 2
      if (match) {
        ctx.status = 403;
        ctx.message = 'Go away, robot.';
      } else {
        await next();
      }
    }
  };