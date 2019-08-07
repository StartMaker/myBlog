const Router = require('koa-router');
const router = new Router();
// const layout = require('../../client/render/production.server');
const layout = require('../static/serverRender');

const {renderToString} = require('react-dom/server');

router.get('/*', async ctx => {
  const css = new Set();
  const insertCss = (...styles) => {styles.forEach((style) => {css.add(style._getCss())})};
  const content = renderToString(layout.default(ctx.request.url, {}, insertCss));
  let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>我的博客</title>
            <meta http-equiv="cache-control" content="no-cache" />
            <meta http-equiv="content-type" content="text/html"/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
            <style type="text/css">${[...css].join(' ')}</style>
        </head>
        <body>
            <div id="root">${content}</div>
            <script src="/clientRender.js" type="text/javascript"></script>
            <script src="/vendor~clientRender.js" type="text/javascript"></script>
        </body>
        </html>
        `;
  ctx.body = html;
});

module.exports = router;