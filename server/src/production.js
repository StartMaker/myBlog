const koa = require('koa');
const app = new koa();

//基础配置
const setBase = require('./base');
setBase(app);

//配置静态资源
const path = require('path');
const koa_static = require('koa-static');
app.use(koa_static(path.join(__dirname, '../static'), {
  // maxage: 1000 * 60 * 60 * 24 * 365,
  maxAge: 0,
  maxage: 0,
  defer: false,
  gzip: true,
  // setHeaders: (res,path) => {
  //     res.set('Content-Type','text/javas', 'charset=utf-8');
  //     if(path.indexOf('css') > -1){
  //
  //     }
  // }
    // setHeaders: (res,path) => {
  //     res.set('Content-Type','text/javas', 'charset=utf-8');
  //     if(path.indexOf('css') > -1){
  //
  //     }
  // }
}));

//配置路由
const setRouter = require('../router');
setRouter(app);

app.listen(3100, '0.0.0.0', async ctx =>{
  console.log('listen to 3100');
});
