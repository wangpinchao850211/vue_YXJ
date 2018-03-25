<template>
  <transition name="slide"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
    @after-leave="afterLeave">
  <div class="home">
    <go-page class="getDefault" :page="pageContent" @goPage="pageClick"></go-page>
    <home-menu :menu-type="menuType"></home-menu>
  </div>
  </transition>
</template>

<script>
import HomeMenu from 'base/moduleMenu'
import goPage from 'base/back'
export default {
  data () {
    return {
      menuType: 0,
      pageContent: 'B'
    }
  },
  created () {
    // 这个位置获取到的是number类型，在传递过程后，子组件接收到的是string类型，需转换（像子组件内传入数据时，最后没有用到）
    this.menuType = 2
    // 向子组件传一个类型，代表需求homeMenu的菜单模块(坑：这个整体是从mounted挪上来的，在下面传，在子组件接永远都是获取不到)
  },
  mounted () {
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
    },
    pageClick () {
      this.$router.go(-1)
    }
  },
  components: {
    HomeMenu,
    goPage
  }
}
</script>
<style scoped>
.home{
  /* width: calc(100vw - 40px);
  min-height: calc(100vh - 40px);
  border: 20px solid  rgb(186, 194, 187);
  background-color: rgb(82, 84, 83); */
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right : 0;
  bottom : 0;
  overflow: hidden;
}
.getDefault{
  background-color: rgba(200,200,200, 0.9);
  position: fixed;
  left: 20px;
  top: 20px;
}
.slide-enter-active, .slide-leave-active{
  transition : all 0.8s cubic-bezier(0.82,0,0.05,1)
}
.slide-enter, .slide-leave-to{
  transform : translate3d(0, 100% ,0)
}
</style>
