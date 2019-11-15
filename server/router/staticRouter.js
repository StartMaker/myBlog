const Router = require('koa-router');
const router = new Router();
const layout = require('../static/serverRender');
// const hotcss = require('hotcss');

const {renderToString} = require('react-dom/server');

router.get('/*', async (ctx, next) => {
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
            <script type="text/javascript">
                //给hotcss开辟个命名空间，别问我为什么，我要给你准备你会用到的方法，免得用到的时候还要自己写。
                var hotcss = {};
                (function() {
                     //根据devicePixelRatio自定计算scale
                     //可以有效解决移动端1px这个世纪难题。
                     var viewportEl = document.querySelector('meta[name="viewport"]'),
                         hotcssEl = document.querySelector('meta[name="hotcss"]'),
                         dpr = window.devicePixelRatio || 1,
                         maxWidth = 540,
                         designWidth = 0;
                         dpr = dpr >= 3 ? 3 : ( dpr >=2 ? 2 : 1 );
                         //允许通过自定义name为hotcss的meta头，通过initial-dpr来强制定义页面缩放
                         if (hotcssEl) {
                             var hotcssCon = hotcssEl.getAttribute('content');
                             if (hotcssCon) {
                                 var initialDprMatch = hotcssCon.match(/initial\\-dpr=([\\d\\.]+)/);
                                 if (initialDprMatch) {
                                     dpr = parseFloat(initialDprMatch[1]);
                                 }
                                 var maxWidthMatch = hotcssCon.match(/max\\-width=([\\d\\.]+)/);
                                 if (maxWidthMatch) {
                                     maxWidth = parseFloat(maxWidthMatch[1]);
                                 }
                                 var designWidthMatch = hotcssCon.match(/design\\-width=([\\d\\.]+)/);
                                 if (designWidthMatch) {
                                     designWidth = parseFloat(designWidthMatch[1]);
                                 }
                             }
                         }
                         document.documentElement.setAttribute('data-dpr', dpr);
                         hotcss.dpr = dpr;
                         document.documentElement.setAttribute('max-width', maxWidth);
                         hotcss.maxWidth = maxWidth;
                         if( designWidth ){
                             document.documentElement.setAttribute('design-width', designWidth);
                             hotcss.designWidth = designWidth;
                         }
                         var scale = 1 / dpr,
                         content = 'width=device-width, initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=no';
                         if (viewportEl) {
                             viewportEl.setAttribute('content', content);
                         } else {
                             viewportEl = document.createElement('meta');
                             viewportEl.setAttribute('name', 'viewport');
                             viewportEl.setAttribute('content', content);
                             document.head.appendChild(viewportEl);
                         }
                     }());
                    
                hotcss.px2rem = function( px , designWidth ){
                     //预判你将会在JS中用到尺寸，特提供一个方法助你在JS中将px转为rem。就是这么贴心。
                     if( !designWidth ){
                          //如果你在JS中大量用到此方法，建议直接定义 hotcss.designWidth 来定义设计图尺寸;
                          //否则可以在第二个参数告诉我你的设计图是多大。
                          designWidth = parseInt(hotcss.designWidth , 10);
                     }
                          return parseInt(px,10)*320/designWidth/20;
                }
                hotcss.rem2px = function( rem , designWidth ){
                     //新增一个rem2px的方法。用法和px2rem一致。
                     if( !designWidth ){
                          designWidth = parseInt(hotcss.designWidth , 10);
                     }
                     //rem可能为小数，这里不再做处理了
                     return rem*20*designWidth/320;
                }
                hotcss.mresize = function(){
                     //对，这个就是核心方法了，给HTML设置font-size。
                     var innerWidth = document.documentElement.getBoundingClientRect().width || window.innerWidth;
                     if( hotcss.maxWidth && (innerWidth/hotcss.dpr > hotcss.maxWidth) ){
                         innerWidth = hotcss.maxWidth*hotcss.dpr;
                     }
                     if( !innerWidth ){ return false;}
                     document.documentElement.style.fontSize = ( innerWidth*20/320 ) + 'px';
                     hotcss.callback && hotcss.callback();
                };
                hotcss.mresize(); 
                //直接调用一次
                window.addEventListener( 'resize' , function(){
                     clearTimeout( hotcss.tid );
                     hotcss.tid = setTimeout( hotcss.mresize , 33 );
                } , false ); 
                //绑定resize的时候调用
                window.addEventListener( 'load' , hotcss.mresize , false ); 
                //防止不明原因的bug。load之后再调用一次。
                setTimeout(function(){
                     hotcss.mresize(); 
                     //防止某些机型怪异现象，异步再调用一次
                },333)
                window.hotcss = hotcss; 
            </script>
            <div id="root">${content}</div>
            <script src="/clientServer.js" type="text/javascript"></script>
            <script src="/vendor~clientServer.js" type="text/javascript"></script>
        </body>
        </html>
        `;
  ctx.body = html;
});

module.exports = router;