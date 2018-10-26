<template>
  <div class="wrapper">
    <div id="wpcUeditor">
      <!-- 这个是数据双向绑定 -->
      <el-input v-model="msg"></el-input>
      <vue-ueditor-wrap v-model="msg" ref="ueditor" :config="myConfig" :init="myInit" @ready="ready" :destroy="true"></vue-ueditor-wrap>
    </div>
  </div>
</template>

<script>
import VueUeditorWrap from 'vue-ueditor-wrap'
export default {
  name: 'webContent',
  data () {
    return {
      msg: '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',
      myConfig: {
        // 如果需要上传功能,找后端小伙伴要服务器接口地址
        // serverUrl: 'http://api.demo.com/ueditor/upload',
        // 你的UEditor资源存放的路径,相对于打包后的index.html(路由使用history模式注意使用绝对路径或者填写正确的相对路径)
        UEDITOR_HOME_URL: 'static/UEditor/',
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 500,
        // 初始容器宽度
        initialFrameWidth: '100%',
        // 关闭自动保存
        enableAutoSave: false
      }
    }
  },

  components: {VueUeditorWrap},

  computed: {},

  // mounted: {},

  methods: {
    myInit () {
      // window.UE.registerUI(/* ... */)
      this.$refs.ueditor.registerButton({
        name: 'test',
        icon: 'static/test-button.png',
        tip: 'this is a test tip',
        handler: (editor, name) => {
          editor.execCommand('inserthtml', `<span>text inserted by test button</span>`)
        }
      })
    },
    ready (editorInstance) {
      console.log(`编辑器实例${editorInstance.key}: `, editorInstance)
    }
  }
}

</script>
<style scoped>
.wrapper{
  width: 100%;
  height: 100vh;
  background-color: burlywood;
}
#wpcUeditor{
  width: 90%;
  height: 100%;
  margin: 0 auto;
}
</style>
