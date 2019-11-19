module.exports = app => {
  const account = require('./account');
  app.use(account.routes()).use(account.allowedMethods());
  if(process.env.NODE_ENV !== 'onlyServer'){
    const staticRouter = require('./staticRouter');
    app.use(staticRouter.routes()).use(staticRouter.allowedMethods());
  }
};