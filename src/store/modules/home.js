import { HomeList } from '@/api/homeMenu'
import * as types from '../mutation-types'

export default {
  state: {
    homeMenu: []
  },

  mutations: {
    [types.SET_HOME_MENU] (state, list) {
      state.homeMenu = list
    }
  },
  actions: {
    // 获取角色列表
    async GetHomeList ({ commit }, params) {
      const res = await HomeList(params)
      if (res.data.status === 1) {
        console.log(res.data.result.homeList)
        commit('SET_HOME_MENU', res.data.result.homeList)
      }
    }
  }
}
