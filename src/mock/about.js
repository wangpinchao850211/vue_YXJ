
const ListRes = {
  status: 1,
  result: {
    homeList: [
      {title: 'html5', content: 'html基础标签@html5语义布局,音频,视频@表格,表单'},
      {title: 'css3', content: 'css(盒模型,选择器,继承)@布局(各种布局)@css3动画'},
      {title: 'JS高级', content: 'html基础标签@html5语义布局,音频,视频@表格,表单'},
      {title: 'ES_x', content: 'html基础标签@html5语义布局,音频,视频@表格,表单'},
      {title: 'http', content: 'html基础标签@html5语义布局,音频,视频@表格,表单'},
      {title: 'ajax', content: 'html基础标签@html5语义布局,音频,视频@表格,表单'},
      {title: 'git', content: 'html基础标签@html5语义布局,音频,视频@表格,表单'},
      {title: 'github', content: 'html基础标签@html5语义布局,音频,视频@表格,表单'},
      {title: 'chrome', content: 'html基础标签@html5语义布局,音频,视频@表格,表单'},
      {title: 'IDE工具', content: 'html基础标签@html5语义布局,音频,视频@表格,表单'},
      {title: '微信公众号', content: 'html基础标签@html5语义布局,音频,视频@表格,表单'},
      {title: '浏览器兼容', content: 'html基础标签@html5语义布局,音频,视频@表格,表单'}],
    projectList: [
      {title: 'vuejs', content: 'html基础标签@html5语义布局,音频,视频@表格,表单'},
      {title: 'jquery', content: 'css(盒模型,选择器,继承)@布局(各种布局)@css3动画'},
      {title: 'less', content: 'html基础标签@html5语义布局,音频,视频@表格,表单'},
      {title: 'sass', content: 'html基础标签@html5语义布局,音频,视频@表格,表单'},
      {title: 'canvas', content: 'html基础标签@html5语义布局,音频,视频@表格,表单'},
      {title: 'echart', content: 'html基础标签@html5语义布局,音频,视频@表格,表单'}]
  }
}
const homeList = {
  status: 1,
  result: {
    homeList: ListRes.result.homeList
  }
}
const projectList = {
  status: 1,
  result: {
    projectList: ListRes.result.projectList
  }
}

export default {
  aboutList: () => {
    return ListRes
  },
  MenuList: (req) => {
    const httpUrl = req.url
    const theIndex = httpUrl.indexOf('?')
    var a = httpUrl.substring(theIndex + 1, httpUrl.length)
    // console.log(a)
    const thekeyIndex = a.indexOf('=')
    const theKey = a.substring(thekeyIndex + 1, a.length)
    // console.log(theKey)
    if (theKey === '1') {
      return homeList
    } else if (theKey === '2') {
      return projectList
    }
  }
}
