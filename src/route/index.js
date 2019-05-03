import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)
const router = new Router({
  routes
})
const HAS_LOGIN = false
router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.requireAuth

  if (requireAuth) {
    if (HAS_LOGIN) next()
    else next({ 'name': 'login' })
  } else {
    next()
  }
})

router.afterEach((to, from, next) => {
  console.log(to)
})

export default router
