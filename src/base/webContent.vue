
<template>
  <el-scrollbar class="top-scroll">
    <div class="wrapper">
      <div class="menu" width="200px">
        <Direct></Direct>
      </div>
      <main>
        <Header class="header"></Header>
        <div>
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
      </main>
    </div>
  </el-scrollbar>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import Direct from './contentBase/directory'
import Header from './contentBase/contentHeader'
export default {
  name: 'webContent',
  data () {
    return {
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
      return this.$refs.myQuillEditor.quill
    }
  },

  watch: {
  },

  mounted () {
    console.log('this is my editor', this.editor)
  },

  methods: {
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
    }
  }
}

</script>
<style lang="scss" scoped>
.top-scroll{
  width:100%;
  height:100%;
}
.wrapper{
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  font-family: "Microsoft YaHei", arial, Helvetica, sans-serif, "宋体" !important;
  color: black;
  .menu{
    width: 199px;
    height: 100%;
    float: left;
    border-right: 1px solid rgb(47, 47, 112)
  }
  main{
    float: right;
    width: calc(100vw - 200px);
    height: 100%;
    .header{
      border-bottom: 2px solid rgb(17, 17, 66);
      height: 66px;
      width: 100%;
    }
    div{
      width: 100%;
      height: calc(100% - 66px);
      #my_quill_editor{
        width: 100%;
        height: 100%;
      }
    }
  }

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
