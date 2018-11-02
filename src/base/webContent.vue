
<template>
  <div class="wrapper">
    <el-button type="primary" @click="showWpcSassDiv" style="width: 140px;">显示隐藏sass</el-button>
    <div style="width:100%;height:100px;background-color:red;" class="wpcSass">我是scss控制</div>
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
      showWpcSass: true,
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
    },
    showWpcSassDiv () {
      // 也得写判断，在scss里扔要写判断，不如直接js控制了
      let div = document.getElementsByClassName('wpcSass')[0]
      console.log(div) // 实现隐藏了
      div.className = 'hiddenWpcSass'
      this.showWpcSass = false
    }
  }
}

</script>
<style scoped>
.wrapper{
  width: 100%;
  height: 100%;
  background-color: burlywood;
}
#wpcUeditor{
  width: 90%;
  height: 100%;
  margin: 0 auto;
}
</style>

<style lang="scss">
// 使用scss实现隐藏，小用一下
@mixin blockOrHidden($boolean:true) {
  @if $boolean {
    @debug "$boolean is #{$boolean}";//debug输出信息
      display: block;
    }
    @else {
      @debug "$boolean is #{$boolean}";
      display: none;
    }
}

.wpcSass {
  @include blockOrHidden;
}

.hiddenWpcSass{
  @include blockOrHidden(false);
}
</style>
