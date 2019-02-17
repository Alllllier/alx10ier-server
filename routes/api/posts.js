const Router = require('koa-router')
const router = new Router()
const { create } = require('../../controller/post')

router.get('/', ctx => {
  ctx.body = {
    message: 'This is the posts'
  }
})

// create a new post
router.post('/', async (ctx, next) => {
    let body = ctx.request.body;
    let title = body.title;
    let content = body.content;
    let post = new Post({
        title: title,
        content: content
    });
    await post.save();
});

router.get('/:id', async (ctx, next) => {
    await next()
});

router.get('/:id/edit', async (ctx, next) => {
    await next()
});

router.patch('/:id', async (ctx, next) => {
    await next()
});

router.delete('/:id/delete', async (ctx, next) => {
    await next()
});



module.exports = router.routes();
