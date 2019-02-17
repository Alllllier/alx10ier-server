const Router = require('koa-router')
const router = new Router()

// TODO: create api doc
router.get('/', ctx => {
  ctx.body = {
    info: 'API for www.alllllier.com',
    doc: 'https://www.alllllier.com/docs/api',
    author: 'Alllllier',
    version: '1.0'
  }
})

module.exports = router.routes()
