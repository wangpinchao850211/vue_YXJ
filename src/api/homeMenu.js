import fetch from 'utils/fetch'

export function HomeList () {
  return fetch({
    url: '/homeMenu',
    method: 'get'
  })
}