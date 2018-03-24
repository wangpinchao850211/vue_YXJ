
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
    projectList: ['vuejs', 'jquery', 'less', 'sass', 'canvas', 'echart']
  }
}
const homeList = {
  status: 1,
  result: {
    homeList: ListRes.result.homeList
  }
}

export default {
  aboutList: () => {
    return ListRes
  },
  homeMenuList: () => {
    return homeList
  }
}
