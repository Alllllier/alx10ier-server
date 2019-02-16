// ---------- dependencies ----------
// TODO: boom, moment, validator, marked, imagemin, faker.js
// koa-accessories
const Koa = require('koa')
const Router = require('koa-router')
const logger = require('koa-logger')
const static = require('koa-static')
// utils
const path = require('path')
// middlewares
const json = require('./middlewares/json')
const error = require('./middlewares/error')
// routes
const apiRouter = require('./routes/api')
const indexRouter = require('./routes/index')
const staticRouter = require('./routes/static')
// ---------- /dependencies ----------

// ---------- middlewares ----------
const app = new Koa()
const router = new Router()

app.use(error())
app.use(logger())
app.use(json())
app.use(static(path.join(__dirname, 'static')));
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
