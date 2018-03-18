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
      component: load('about'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: load('home')
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: load('home')
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
