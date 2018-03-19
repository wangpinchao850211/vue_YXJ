<template>
  <transition name="slide"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
    @after-leave="afterLeave">
  <div class="home">
    aboutHome页
  </div>
  </transition>
</template>

<script>
export default {
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
  }
}
</script>
<style scoped>
.home{
  width: calc(100vw - 40px);
  min-height: calc(100vh - 40px);
  border: 20px solid  rgb(186, 194, 187);
  background-color: rgb(82, 84, 83);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right : 0;
  bottom : 0;
}
/* .slide-enter-active, .slide-leave-active{
  transition : all 0.8s cubic-bezier(0.82,0,0.05,1)
}
.slide-enter, .slide-leave-to{
  transform : translate3d(100%, 0 ,0)
} */
</style>
