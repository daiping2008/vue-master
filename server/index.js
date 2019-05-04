const Koa = require('koa')
const router = require('koa-router')()
const kaoBody = require('koa-body')

const app = new Koa()
app.use(kaoBody())
app.use(router.routes())

router.get('/user', async (ctx, next) => {
  const { id } = ctx.request.query
  console.log(id)
  ctx.body = {
    code: 1,
    data: {
      username: 'Susan',
      age: 18
    }
  }
  next()
})

router.post('/login', async (ctx, next) => {
  const { username, pwd } = ctx.request.body
  console.log(username, pwd)
  ctx.body = {
    code: 0,
    data: {
      msg: '登录成功'
    }
  }
  next()
})

app.listen(3000, () => {
  console.log('success')
})
