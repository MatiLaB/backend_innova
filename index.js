const Koa = require('koa');
const { koaBody } = require('koa-body')
const Logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const userRoutes = require("./src/routes/users");

const dotenv = require('dotenv');


dotenv.config();

const app = new Koa();

app.use(cors());

app.use(Logger());
app.use(koaBody())

app.use(bodyParser());

// rutas
app.use(async (ctx, next) => {
    if (ctx.path === '/') {
        ctx.body = { message: 'API de Estética VS corriendo' };
    } else {
        await next();
    }
});


app.use(userRoutes.routes()).use(userRoutes.allowedMethods());

/*
app.use((ctx, next) => {
    ctx.body = 'Hello World';
});
*/

app.listen(3000, '0.0.0.0', () => {
    console.log('Koa corriendo en puerto 3000');
  });