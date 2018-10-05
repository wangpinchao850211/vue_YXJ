import Mock from 'mockjs'
import aboutAPI from './about'
import htmlAPI from './html5'
import cssAPI from './css3'
import loginAPI from './login'

Mock.setup({
  timeout: '350-600'
})

Mock.mock(/\/about/, 'get', aboutAPI.aboutList)
Mock.mock(/\/Menu/, 'get', aboutAPI.MenuList)
Mock.mock(/\/htmlcontent/, 'get', htmlAPI.html5content)
Mock.mock(/\/csscontent/, 'get', cssAPI.css3content)
Mock.mock(/\/login/, 'post', loginAPI.Logincontent)

export default Mock
