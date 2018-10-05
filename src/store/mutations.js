import * as types from './mutation-types'

const mutations = {
  [types.SET_MENU_LIST] (state, list) {
    state.abouMenuList = list
  },
  [types.SET_REMEBERLOGIN_VALUE] (state, value) {
    window.localStorage.setItem('remeberValue', value)
  },
  [types.GET_REMEBERLOGIN_VALUE] (state) {
    state.remeberValueLogin = window.localStorage.getItem('remeberValue')
  },
  [types.REMOVE_REMEBERLOGIN_VALUE] (state) {
    window.localStorage.removeItem('remeberValue')
  }
}

export default mutations
