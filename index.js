const Koa = require('koa');
const { koaBody } = require('koa-body')
const Logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const userRoutes = require("./src/routes/users");
const clinicRoutes = require('./src/routes/clinics');
const professionalRoutes = require('./src/routes/professionals');
const reviewRoutes = require('./src/routes/reviews');
const reportRoutes = require('./src/routes/reports');

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
app.use(clinicRoutes.routes()).use(clinicRoutes.allowedMethods());
app.use(professionalRoutes.routes()).use(professionalRoutes.allowedMethods());
app.use(reviewRoutes.routes()).use(reviewRoutes.allowedMethods());
app.use(reportRoutes.routes()).use(reportRoutes.allowedMethods());

/*
app.use((ctx, next) => {
    ctx.body = 'Hello World';
});
*/

app.listen(3000, '0.0.0.0', () => {
    console.log('Koa corriendo en puerto 3000');
  });