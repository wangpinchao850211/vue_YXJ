import fetch from 'utils/fetch'

export function aboutMenuList () {
  return fetch({
    url: '/about',
    method: 'get'
  })
}