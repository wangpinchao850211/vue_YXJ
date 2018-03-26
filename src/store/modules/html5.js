import { htmlContent } from '@/api/htmlcontent'
import * as types from '../mutation-types'

export default {
  state: {
    html5content: []
  },

  mutations: {
    [types.SET_HTML_CONTENT] (state, content) {
      state.html5content = content
    }
  },
  actions: {
    // 获取角色列表
    async Gethtmlcontent ({ commit }, params) {
      const res = await htmlContent(params)
      console.log(res)
      return res.data.result
    }
  }
}
