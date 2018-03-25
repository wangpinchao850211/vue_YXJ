import { ProjectList } from '@/api/projectMenu'
import * as types from '../mutation-types'

export default {
  state: {
    projectMenu: []
  },

  mutations: {
    [types.SET_PROJECT_MENU] (state, list) {
      state.projectMenu = list
    }
  },
  actions: {
    // 获取角色列表
    async GetProjectList ({ commit }, params) {
      const res = await ProjectList(params)
      console.log(res)
      if (res.data.status === 1) {
        console.log(res.data.result.projectList)
        commit('SET_PROJECT_MENU', res.data.result.projectList)
      }
    }
  }
}
