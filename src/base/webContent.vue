
<template>
  <transition name="slide">
    <el-scrollbar class="top-scroll" :native="true">
      <div class="wrapper">
        <el-row>
          <el-col :span="sidebarWidth" class="menu">
            <Direct></Direct>
          </el-col>
          <el-col :span="contentWidth" class="main">
            <Header class="header" @readedit='readOrEdit' @logout='logoutSure'></Header>
            <div v-if="ReadOrEdit" class="ReadOrEdit">
              <div id="my_quill_editor">
                <quill-editor
                  v-model="content"
                  ref="myQuillEditor"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @change="onEditorChange($event)"
                  @ready="onEditorReady($event)">
                </quill-editor>
              </div>
            </div>
            <div v-if="!ReadOrEdit" class="ReadOrEdit" v-html="content"></div>
          </el-col>
        </el-row>
      </div>
    </el-scrollbar>
  </transition>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import Direct from './contentBase/directory'
import Header from './contentBase/contentHeader'
import { mapGetters } from 'vuex'

export default {
  name: 'webContent',
  data () {
    return {
      title: '',
      ReadOrEdit: false,
      content: `<h2>I am Super</h2>`,
      editorOption: {
        debug: 'info',
        placeholder: 'Compose an epic...',
        readOnly: true,
        theme: 'snow',
        modules: { toolbar: [
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote', 'code-block'],

          [{ 'header': 1 }, { 'header': 2 }], // custom button values
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
          [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
          [{ 'direction': 'rtl' }], // text direction

          [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

          [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],

          ['clean'], // remove formatting button
          ['link', 'image', 'video']
        ] }
      }
    }
  },

  components: {Direct, Header, quillEditor},

  computed: {
    editor () {
      if (this.$refs.myQuillEditor) { // 如果有编辑器才进行绑定
        return this.$refs.myQuillEditor.quill
      }
    },
    ...mapGetters(['sidebarWidth', 'contentWidth'])
  },

  watch: {
  },

  mounted () {
    console.log('this is my editor', this.editor)
    // title接受路由传过来的模块名称
    this.title = this.$route.query.name
  },

  methods: {
    readOrEdit (flag) {
      if (flag === 0) {
        this.ReadOrEdit = false
      } else if (flag === 1) {
        this.ReadOrEdit = true
      }
    },
    onEditorBlur (editor) { // 失去焦点事件
      console.log('editor blur!', editor)
    },
    onEditorFocus (editor) { // 获得焦点事件
      console.log('editor focus!', editor)
    },
    onEditorChange ({ editor, html, text }) { // 内容改变事件
      console.log('editor change!', editor, html, text)
      this.content = html
      console.log('editor ready!', editor)
    },
    onEditorReady (editor) {
      console.log('editor ready!', editor)
    },
    logoutSure () {
      this.$confirm('确认退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        lockScroll: false,
        customClass: 'custom-message',
        showClose: false
      }).then(() => {
        // 模拟登出
        return new Promise((resolve, reject) => {
          try {
            setTimeout(() => {
              resolve()
              this.$router.push({path: `/home/${this.title}`, query: {name: this.title}})
            }, 50)
          } catch (error) {
            reject(error)
          }
        })
      }).catch(() => {
        console.log('您点击了取消')
      })
    }
  }
}

</script>
<style lang="scss" scoped>
.top-scroll{
  width:auto;
  height:auto;
}
.wrapper{
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  font-family: "Microsoft YaHei", arial, Helvetica, sans-serif, "宋体" !important;
  color: black;
  .menu{
    height: 100vh;
    border-right: 1px solid rgb(47, 47, 112)
  }
  .main{
    height: 100vh;
    .header{
      border-bottom: 2px solid rgb(17, 17, 66);
      height: 66px;
      width: 100%;
    }
    .ReadOrEdit{
      width: 100%;
      height: calc(100% - 66px);
      #my_quill_editor{
        width: 100%;
        height: 100%;
      }
    }
  }
}
.slide-enter-active, .slide-leave-active{
  transition : all 0.8s cubic-bezier(0.82,0,0.05,1)
}
.slide-enter, .slide-leave-to{
  transform : translate3d(100%, 0 ,0)
}
</style>

<style lang="scss">
.custom-message .el-message-box__btns .el-button{
  width: 60px;
}
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
