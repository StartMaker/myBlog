module.exports = app => {
  const staticRouter = require('./staticRouter');
  const account = require('./account');
  app.use(account.routes()).use(account.allowedMethods());
  if(app.env !== 'onlyServer'){
    app.use(staticRouter.routes()).use(staticRouter.allowedMethods());
  }
};