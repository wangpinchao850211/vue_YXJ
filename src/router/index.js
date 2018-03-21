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
      // 为什么不能跳转到子路由，这是个问题！(看了几个项目，要显示children，必须还要有router-view，否则无法显示)
      children: []
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
