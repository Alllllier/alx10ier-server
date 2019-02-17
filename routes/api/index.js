const Router = require('koa-router')
const router = new Router()

const users = require('./user')

router.use('/users', users)

router.get('/', ctx => {
  ctx.body = {
    message: 'This is the API'
  }
})

// handles 404 on /api
router.all('*', ctx => {
  ctx.throw(404, "API endpoint not found")
})

module.exports = router.routes()
