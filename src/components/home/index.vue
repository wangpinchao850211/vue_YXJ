<template>
  <transition name="slide"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
    @after-leave="afterLeave">
  <div class="home">
    <home-menu :param-list="paramList"></home-menu>
  </div>
  </transition>
</template>

<script>
import HomeMenu from 'base/moduleMenu'

export default {
  data () {
    return {
      paramList: []
    }
  },
  mounted () {
    // 这个位置获取到的是number类型，在传递过程后，子组件接收到的是string类型，需转换
    this.paramList = this.$store.getters.aboumenulist.homeList
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
    HomeMenu
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
.slide-enter-active, .slide-leave-active{
  transition : all 0.8s cubic-bezier(0.82,0,0.05,1)
}
.slide-enter, .slide-leave-to{
  transform : translate3d(0, -100% ,0)
}
</style>
