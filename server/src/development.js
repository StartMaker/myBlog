const koa = require('koa');
const app = new koa();
const koaWebpack = require('koa-webpack');
const config = require('../../config/webpack.development');
const path = require('path');

//基础配置
const setBase = require('./base');
setBase(app);

//配置静态资源热加载
koaWebpack({
  config: config,
  devMiddleware: {
    publicPath: '/',
    logLevel: 'error',
    serverSideRender: false
  },
  hotClient: {
    logLevel: 'error',
    autoConfigure: false,
    https: false,
    reload: false,
    hmr: true
  }
})
  .then(middleware => {
    app.use(middleware);
    app.use(async ctx => {
      const filename = path.resolve(config.output.path, 'index.html');
      ctx.response.type = 'html';
      ctx.response.body = middleware.devMiddleware.fileSystem.createReadStream(filename);
    });
  })
  .catch(err => {
    console.log(err);
  });

//监听3000端口
app.listen(3001, async ctx => {
  console.log('listen to 3001');
});