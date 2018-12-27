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
// import './assets/theme/wpcSass.scss' 这个歌sass起作用了，影响了编辑器（重点）
import './assets/theme/style.scss'
import animate from 'animate.css'
// 引入vue-quill-editor(这个插件功能少，但是适用较方便，就像正常使用组件那样使用即可，如果需求功能少的可以考虑，缺少常见的撤销，格式刷，插入表格等)
import VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

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
Vue.use(VueQuillEditor);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
