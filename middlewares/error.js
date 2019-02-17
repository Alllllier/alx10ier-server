// TODO: naming general 404
module.exports = () => {
  return async function (ctx, next) {
      try {
          await next()
          if (ctx.status === 404) {
                ctx.throw(404)
          }
      } catch (err) {
          ctx.status = err.status || 500
          ctx.body = {
            status: err.status,
            message: err.message
          }
      }
  };
}