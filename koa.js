const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router');
const router = new Router();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());
app.use(require('koa-static')('./dist'));

app
  .use(router.routes())
  .use(router.allowedMethods());

router.get('*', (ctx, next) => {
  ctx.type = 'html';
  ctx.body = fs.createReadStream('./dist/index.html');
});

app.listen(3000, () => {
  console.log('server is running locahost:3000')
})
