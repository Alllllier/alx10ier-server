module.exports = () => {
  function render(json) {
     this.set("Content-Type", "application/json")
     this.body = JSON.stringify(json, null, 2)
 }
 return async (ctx, next) => {
     ctx.json = render.bind(ctx)
     await next()
 }
}
