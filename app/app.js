module.exports = app => {
    app.once('server', server => {
      console.log('server is runing in localhost:7002')
      // websocket
    });
    app.on('error', (err, ctx) => {
      // report error
    });
    app.on('request', ctx => {
      // log receive request
    });
    app.on('response', ctx => {
        console.log('22222')
      // ctx.starttime is set by framework
      const used = Date.now() - ctx.starttime;
      // log total cost
    });
  };