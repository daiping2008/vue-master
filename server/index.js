const Koa = require('koa')
const router = require('koa-router')()

const app = new Koa()

app.use(router.routes())
router.get('/user', async ctx => {
  ctx.body = {
    code: 0,
    data: {
      username: 'Susan',
      age: 18
    }
  }
})
app.use(async ctx => {
  ctx.body = 'hello world'
})

app.listen(3000, () => {
  console.log('success')
})
