const Router = require('koa-router')
const router = new Router()

router.get('/', ctx => {
  ctx.body = {
    message: 'This is the Static'
  };
})

// handles 404 on /static
router.all('*', ctx => {
  ctx.throw(404, "File Not Found")
})

module.exports = router.routes()
