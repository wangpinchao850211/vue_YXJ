import axios from 'axios'
import { getBaseUrl } from '@/utils/api'

// 创建axios实例
const service = axios.create({
  baseURL: getBaseUrl(),
  timeout: 5000
})

// request拦截器
service.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config = {
      ...config,
      transformRequest: [function (data) {
        let ret = ''
        let isComplex = false
        for (const it in data) {
          if (typeof (data[it]) === 'object') {
            isComplex = true
            break
          }
          ret += `${encodeURIComponent(it)}=${encodeURIComponent(data[it])}&`
        }
        if (isComplex) return data
        return ret
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  }
  return config
}, (error) => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => response,
  /**
  * @TODO 权限验证失败，登出并返回到登录页
  */
  (error) => {
    alert(error.message)
    return Promise.reject(error)
  }
)
export default service
