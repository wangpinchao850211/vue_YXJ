export function getBaseUrl () {
  let base = 'https://vhsupply.test.viewchain.net/api1'
  // 持续集成环境
  if (process.env.NODE_ENV === 'build') {
    base = 'https://vhsupply.test.viewchain.net/api1'
  } else if (process.env.NODE_ENV === 'staging') { // 测试环境
    base = 'https://vhsupply.staging.viewchain.net/api1'
  } else if (process.env.NODE_ENV === 'production') { // 生产环境
    base = 'https://gyb.viewsupplychain.com/api1'
  }
  return base
}

export default {
  getBaseUrl
}
