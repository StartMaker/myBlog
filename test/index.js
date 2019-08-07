const Koa = require('koa');
const app = new Koa();

const mmm = require('./mmm');
mmm(app);

app.listen(3000, function () {

});