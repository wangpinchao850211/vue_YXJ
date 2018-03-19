import * as types from './mutation-types'

const mutations = {
  [types.SET_MENU_LIST] (state, list) {
    state.abouMenuList = list
  }
}

export default mutations
