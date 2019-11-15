const koaRouter = require('koa-router');
const router = new koaRouter();
const {login} = require('../mode/account');

router.post('/api/login', async ctx => {
  const {body} = ctx.request;
  let [{result}] = await login(body.username, body.password);
  console.log(result);
});