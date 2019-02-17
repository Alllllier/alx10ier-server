const Router = require('koa-router')
const router = new Router()
const { create } = require('../../controller/user')

router.get('/', ctx => {
  ctx.body = {
    message: 'This is the users'
  }
})

router.post('/', create)

module.exports = router.routes();
