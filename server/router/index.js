module.exports = app => {
  const staticRouter = require('./staticRouter');
  app.use(staticRouter.routes()).use(staticRouter.allowedMethods());
};