
<template>
  <div class="wrapper">
    <!-- <el-button type="primary" @click="showWpcSassDiv" style="width: 140px;">显示隐藏sass</el-button>
    <div style="width:100%;height:100px;background-color:red;" class="wpcSass">我是scss控制</div> -->
    <div id="wpcUeditor">
      <!-- 这个是数据双向绑定 -->
      <el-input v-model="msg"></el-input>
      <vue-ueditor-wrap v-model="msg" ref="ueditor" :config="myConfig" :init="myInit" @ready="ready" :destroy="true" @contentChange="change"></vue-ueditor-wrap>
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
        enableAutoSave: false,
        toolbars: [[
          'undo', // 撤销
          'redo', // 重做
          'bold', // 加粗
          'indent', // 首行缩进
          'italic', // 斜体
          'underline', // 下划线
          'subscript', // 下标
          'fontborder', // 字符边框
          'superscript', // 上标
          'formatmatch', // 格式刷
          'source', // 源代码
          'blockquote', // 引用
          'pasteplain', // 纯文本粘贴模式
          'selectall', // 全选
          'print', // 打印
          'preview', // 预览
          'horizontal', // 分隔线
          'removeformat', // 清除格式
          'insertrow', // 前插入行
          'insertcol', // 前插入列
          'mergeright', // 右合并单元格
          'mergedown', // 下合并单元格
          'deleterow', // 删除行
          'deletecol', // 删除列
          'splittorows', // 拆分成行
          'splittocols', // 拆分成列
          'splittocells', // 完全拆分单元格
          'deletecaption', // 删除表格标题
          'inserttitle', // 插入标题
          'mergecells', // 合并多个单元格
          'deletetable', // 删除表格
          'cleardoc', // 清空文档
          'insertparagraphbeforetable', // "表格前插入行"
          'insertcode', // 代码语言
          'fontfamily', // 字体
          'fontsize', // 字号
          'paragraph', // 段落格式
          'simpleupload', // 单图上传
          'edittable', // 表格属性
          'edittd', // 单元格属性
          'spechars', // 特殊字符
          'searchreplace', // 查询替换
          'insertvideo', // 视频
          'justifyleft', // 居左对齐
          'justifyright', // 居右对齐
          'justifycenter', // 居中对齐
          'justifyjustify', // 两端对齐
          'forecolor', // 字体颜色
          'backcolor', // 背景色
          'insertorderedlist', // 有序列表
          'insertunorderedlist', // 无序列表
          'fullscreen', // 全屏
          'directionalityltr', // 从左向右输入
          'directionalityrtl', // 从右向左输入
          'rowspacingtop', // 段前距
          'rowspacingbottom', // 段后距
          'imageleft', // 左浮动
          'imageright', // 右浮动
          'imagecenter', // 居中
          'wordimage', // 图片转存
          'lineheight', // 行间距
          'edittip ', // 编辑提示
          'customstyle', // 自定义标题
          'autotypeset', // 自动排版
          'webapp', // 百度应用
          'touppercase', // 字母大写
          'tolowercase', // 字母小写
          'background', // 背景
          'template', // 模板
          'inserttable', // 插入表格
          'charts' // 图表
        ]]
      }
    }
  },

  components: {VueUeditorWrap},

  computed: {
    richTxt () {
      console.log(this.msg)
      return this.msg
    }
  },

  mounted () {
    console.log(this.richTxt)
    window.addEventListener('keyup', () => {
      console.log(this.richTxt)
    })
    window.addEventListener('click', (e) => {
      console.log(e)
    })
  },

  methods: {
    myInit () {
      // window.UE.registerUI(/* ... */)
      this.$refs.ueditor.registerButton({
        name: 'test',
        icon: '/static/UEditor/themes/default/images/star_on.png',
        tip: 'this is a test tip',
        handler: (editor, name) => {
          editor.execCommand('inserthtml', `<span>text inserted by test button</span>`)
        }
      })
    },
    ready (editorInstance) {
      console.log(`编辑器实例${editorInstance.key}: `, editorInstance)
      editorInstance.addListener('keyup', () => {
        console.log(editorInstance.getContent())
      })
      editorInstance.addListener('click', (e) => {
        console.log(e)
        console.log(editorInstance.selection.getNative())
        console.log(editorInstance.selection.getStartElementPath())
        console.log(editorInstance.getContent())
        console.log(editorInstance.getContentTxt())
        // editorInstance.setContent(`<span>text inserted by test button</span>`)
        editorInstance.execCommand('anchor', 'anchor1')
      })
      editorInstance.addListener('selectionchange', (e) => {
        console.log(e)
        console.log('选区已经变化！')
      })
    },
    change (val) {
      console.log('8888888888')
      console.log(val)
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
