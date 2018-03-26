import fetch from 'utils/fetch'

export function CssContent (param) {
  console.log(param)
  return fetch({
    url: `/csscontent?title=${param}`,
    method: 'get'
  })
}