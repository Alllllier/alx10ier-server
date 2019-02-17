// ---------- dependencies ----------
// TODO: boom, moment, validator, marked, imagemin, faker.js
// koa-accessories
const Koa = require('koa')
const Router = require('koa-router')
const logger = require('koa-logger')
//const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
// utils
const path = require('path')
const mongoose = require('mongoose');
// middlewares
const error = require('./middlewares/error')
// routes
const apiRouter = require('./routes/api')
const indexRouter = require('./routes/index')
const staticRouter = require('./routes/static')
// ---------- /dependencies ----------

// ---------- middlewares ----------
const app = new Koa()
const router = new Router()

mongoose.connect('mongodb://localhost:27017/alx10ier', {useNewUrlParser: true});

app.use(error())
app.use(logger())
app.use(bodyParser())
//app.use(static(path.join(__dirname, 'static')));
app.use(router.routes())
app.use(router.allowedMethods())
// ---------- /middlewares ----------

// ---------- routes ----------
router.use('/', indexRouter)
router.use('/api', apiRouter)
router.use('/static', staticRouter)
// ---------- /routes ----------

// ---------- server ----------
app.listen(3000, () => console.log('Listening on port 3000'));
// ---------- /server ----------
