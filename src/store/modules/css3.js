import { CssContent } from '@/api/cssContent'
import * as types from '../mutation-types'

export default {
  state: {
    cssContent: []
  },

  mutations: {
    [types.SET_CSS_CONTENT] (state, content) {
      state.cssContent = content
    }
  },
  actions: {
    // 获取角色列表
    async GetCsscontent ({ commit }, params) {
      const res = await CssContent(params)
      console.log(res)
      if (res.data.status === 1) {
        console.log(res.data.result.css3)
        // getters里定义层级有问题了，这次改了，把数据存上了，在前端就可以获取到了
        commit('SET_CSS_CONTENT', res.data.result.css3)
      }
    }
  }
}
