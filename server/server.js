import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import renderApp from '../app/server';

const router = new Router();
const app = new Koa();

router.get('*', renderApp);

app.use(serve('public'));
app.use(router.routes(), router.allowedMethods());

export default app;
