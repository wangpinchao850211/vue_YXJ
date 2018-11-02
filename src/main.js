// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/theme/wpcSass.scss'
import './assets/theme/style.scss'
import animate from 'animate.css'

Vue.config.productionTip = false

// 自定义处理模块菜单的过滤器
// Vue.filter('contentFilter', function (item) {
//   if (!item) return ''
//   const itemArr = []
//   const ite = item.toString().split('@')
//   for (let i = 0; i < ite.length; i++) {
//     if (ite[i] !== '') {
//       itemArr.push(ite[i])
//     }
//   }
//   console.log(itemArr)
//   return itemArr
// })

Vue.use(router)
Vue.use(store)
Vue.use(ElementUI)
Vue.use(animate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
