<template>
  <transition name="slide"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
    @after-leave="afterLeave">
  <div class="html">
    <module v-if="content.length>0" :content="content"></module>
  </div>
  </transition>
</template>

<script>
import store from 'store'
import module from 'base/module'
import {doAction} from 'utils/index'

async function html5Content (params) {
  console.log(params.theTitle)
  const that = params
  const result = await store.dispatch('Gethtmlcontent', params.theTitle) // 复一个结果变量接收，在下面就能打出来，直接await console就出来了，但是store和fetch都没走完呢（更改了，原因是getters定义层级有错误，现在可以用store来获取了）
  console.log(result)
  that.content = result.html5 // 加一个实例里的变量也能再mounted获取到数据了
}

export default {
  data () {
    return {
      theTitle: '',
      content: []
    }
  },
  created () {
    this.theTitle = this.$route.query.name
    doAction(html5Content, this)
  },
  mounted () {
    const that = this
    setTimeout(() => {
      console.log(that.content)
    }, 600)
  },
  methods: {
    enter (el, done) {
      console.log(el)
    },
    afterEnter () {
      console.log('afterEnter')
    },
    leave (el, done) {
      console.log(el)
    },
    afterLeave () {
      console.log('afterleave')
    }
  },
  components: {
    module
  }
}
</script>
<style scoped>
.html{
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  /* border: 20px solid  rgb(186, 194, 187); */
  /* background-color: rgb(182, 182, 182); */
  color: black;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right : 0;
  bottom : 0;
  overflow: auto;
}
.slide-enter-active, .slide-leave-active{
  transition : all 0.8s cubic-bezier(0.82,0,0.05,1)
}
.slide-enter, .slide-leave-to{
  transform : translate3d(0, -100% ,0)
}
</style>
