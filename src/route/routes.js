import Home from '@/views/Home'
import About from '@/views/About'
import Error from '@/views/Error'

export default [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'about',
    path: '/about',
    component: About
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    name: 'foo',
    path: '/foo',
    component: () => import('@/views/foo'),
    meta: { fruit: 'apple' },
    children: [{
      name: 'bar',
      path: 'bar',
      component: () => import('@/views/bar'),
      meta: { requireAuth: false }
    }]
  },
  {
    path: '/splitpane',
    name: 'splitpane',
    component: () => import('@/views/split-pane')
  },
  {
    path: '/menu-page',
    name: 'menu-page',
    component: () => import('@/views/menu-page')
  },
  {
    path: '*',
    component: Error
  }
]
