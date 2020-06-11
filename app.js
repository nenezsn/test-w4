module.exports = app => {
  app.count=0
  app.once('server', server => {
    console.log('app',app.config.env)
    console.log('server is runing in localhost:7001')
  });
  app.on('error', (err, ctx) => {
  });
  app.on('request', ctx => {
  });
  app.on('response', ctx => {
  });
};