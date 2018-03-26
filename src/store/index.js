import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
// 引用vuex的模块，进行vuex的日志打印
import createLogger from 'vuex/dist/logger'
import homeMenu from './modules/home'
import projectMenu from './modules/project'
import html5 from './modules/html5'
import css3 from './modules/css3'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    homeMenu,
    projectMenu,
    html5,
    css3
  },
  state,
  mutations,
  actions,
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
