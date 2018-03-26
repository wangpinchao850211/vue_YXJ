import fetch from 'utils/fetch'

export function htmlContent (param) {
  console.log(param)
  return fetch({
    url: `/htmlcontent?title=${param}`,
    method: 'get'
  })
}