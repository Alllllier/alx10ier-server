const Router = require('koa-router')
const router = new Router()

router.get('/', ctx => {
  ctx.json({
    message: 'This is the API'
  })
})

// handles 404 on /api
router.all('*', ctx => {
  ctx.throw(404, "API Endpoint Not Found")
})

module.exports = router.routes()
