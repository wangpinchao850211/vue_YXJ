<template>
  <transition name="slide"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
    @after-leave="afterLeave">
    <div class="default">
      <div class="getIcon">
        <go-page class="getDefault" :page="pageContent" @goPage="pageClick"></go-page>
        <span class="navigation">Navigation ————</span>
      </div>
      <div class="navList">
        <h1>hello webWorker...</h1>
        <div class="navMenu">
          <router-link tag="div" to="/home">
            <h1>Home</h1>
          </router-link>
          <router-link tag="div" to="/project">
            <h1>Project</h1>
          </router-link>
          <router-link tag="div" to="/about">
            <h1>About</h1>
          </router-link>
          <router-link tag="div" to="/history">
            <h1>History</h1>
          </router-link>
        </div>
      </div>
      <div class="workerLife">
          <h1>People</h1>
          <h1>Links</h1>
        </div>
    </div>
  </transition>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import goPage from 'base/back'
export default {
  name: 'default',
  data () {
    return {
      pageContent: 'A'
    }
  },
  computed: {
    ...mapGetters([
      'aboumenulist'
    ])
  },
  created () {
    this.getMenuList()
  },
  methods: {
    pageClick () {
      // 重点重点，根主页用forward方法，不能用go了，这个都给忘了！！！
      this.$router.forward()
    },
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
    ...mapMutations({
    }),
    ...mapActions({
      getMenuList: 'getMenuList'
    })
  },
  // 在子路由还是监控不到路由变化呢
  watch: {
    '$route' (to, from) {
      console.log(to.path)
      console.log(from)
    }
  },
  components: {
    goPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.default{
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  border: 20px solid  rgb(82, 84, 83);
  /* background-color: rgb(93, 95, 94); */
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right : 0;
  bottom : 0;
  overflow: auto;
}
.getIcon{
  width: 480px;
  height: 160px;
  display: inline-block;
  /* border: 1px solid blue; */
  position: relative;
}
.getDefault{
  background-color: rgb(255,255,255);
  position: absolute;
  left: 20px;
  top: 20px;
}
.default .getIcon .navigation{
  position: absolute;
  right: 24px;
  top: 30px;
  font-family: ClarendonLTStdBold;
  font-weight: 800;
  font-size: 14px;
  color: rgb(185, 191, 187);
}
.default .navList{
  position: relative;
  /* border: 2px solid red; */
  height: 400px;
}
.default .navList h1{
  /* 在main.js引入字体库后，直接在css里即可使用了 */
  font-family: ClarendonLTStdBold;
  font-size: 24px;
  font-weight: 400;
  color: rgb(185, 191, 187);
}
.default .navList h1:nth-child(1) {
  margin-left: 20px;
  font-size: 22px;
  font-weight: 600;
  color: rgb(255,255,255);
}
.navMenu{
  position: absolute;
  right: 66%;
  top: 2px;
}
.navMenu h1:hover{
  color: rgb(255,255,255);
  cursor: pointer;
}
.workerLife{
  position: absolute;
  right: 40px;
  bottom: 160px;
  /* border: 1px solid greenyellow; */
}
.workerLife h1:hover{
  color: gainsboro;
  cursor: pointer;
}
 /* 滑出的动画 */
.slide-enter-active, .slide-leave-active{
  transition : all 0.8s cubic-bezier(0.82,0,0.05,1)
}
.slide-enter, .slide-leave-to{
  transform : translate3d(-100%, 0 ,0)
}
/* .slide-left-enter, .slide-right-leave-active {
  transform : translate3d(100%, 0 ,0)
}
.slide-left-leave-active, .slide-right-enter {
  transform: translate3d(-100%, 0, 0);
} */
</style>
