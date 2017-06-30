const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
app.use(views(__dirname + '/storybook-static', {
  extension: 'ejs'
}));
app.use(async (ctx) => {
  await ctx.render('index.html');
});
app.listen(3000, () => {
  console.log('server is listening: 3000')
});
