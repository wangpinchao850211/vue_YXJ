import Vue from 'vue'
import Router from 'vue-router'
// import Default from '@/components/default'
// import About from '@/components/about/index'
// import Home from '@/components/home/index'

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
    }
  ]
})
