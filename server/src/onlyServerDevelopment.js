const koa = require('koa');
const app = new koa();
process.env.NODE_ENV = 'onlyServer';

//基础配置
const setBase = require('./base');
setBase(app);

//配置路由
const setRouter = require('../router');
setRouter(app);

app.listen(3100, async ctx =>{
    console.log('listen to 3100');
});
