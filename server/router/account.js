const Router = require('koa-router');
const router = new Router();

router.get('/api/login', async ctx => {
  ctx.body = {
      ll: '222'
  };
});

module.exports = router;