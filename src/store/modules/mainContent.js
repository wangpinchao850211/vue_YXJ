import * as types from '../mutation-types'

export default {
  state: {
    sidebarWidth: 5,
    contentWidth: 19,
    opened: true
  },

  mutations: {
    [types.SET_MENU_WIDTH] (state, width) {
      state.sidebarWidth = width
      state.contentWidth = 24 - width
    },
    [types.SET_MENU_OPEN] (state, flag) {
      state.opened = flag
    }
  },
  actions: {
  }
}
