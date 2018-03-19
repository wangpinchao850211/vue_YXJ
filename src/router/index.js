import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function load (file) {
  return () => import(`components/${file}`)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: load('index')
    },
    {
      path: '/about',
      name: 'about',
      component: load('about/index')
    },
    {
      path: '/home',
      name: 'home',
      component: load('home/index'),
      redirect: '/home/menu',
      // 为什么不能跳转到子路由，这是个问题！
      children: [
        {
          path: '/home/menu',
          name: 'homeMenu',
          component: load('home/homeMenu')
        }
      ]
    },
    {
      path: '/project',
      name: 'project',
      component: load('project')
    },
    {
      path: '/history',
      name: 'history',
      component: load('history')
    },
    {
      path: '/people',
      name: 'people',
      component: load('people')
    },
    {
      path: '/links',
      name: 'links',
      component: load('links')
    }
  ]
})
