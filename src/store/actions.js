import {aboutMenuList} from 'api/about'
import * as types from './mutation-types'

export const getMenuList = function ({commit}) {
  aboutMenuList().then((res) => {
    console.log(res.data.result)
    commit(types.SET_MENU_LIST, res.data.result)
  })
}
