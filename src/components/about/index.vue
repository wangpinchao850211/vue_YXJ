<template>
  <transition name="slide"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
    @after-leave="afterLeave">
    <div class="about">
      <div class="getIcon">
        <go-page class="getDefault" :page="pageContent" @goPage="pageClick"></go-page>
      </div>
      <div class="aboutTitle">
        <h1>hello webWorker...</h1>
      </div>
      <div class="aboutMain">
        <div class="menuList">
          <h2>base-Module</h2>
          <div :style="note">
            <p @click="goHomeList">
              <span v-if="aboumenulist.homeList.length>0" v-for="(item, index) in aboumenulist.homeList" :key="index">{{item}}</span>
              ......
            </p>
          </div>
        </div>
        <div class="menuList">
          <h2>frame-Module</h2>
          <div :style="note_tow">
            <p @click="goProjectList">
              <span v-if="aboumenulist.projectList.length>0" v-for="(item, index) in aboumenulist.projectList" :key="index">{{item}}</span>
              ......
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import goPage from 'base/back'
import bgUrl from 'static/horse.jpg'
import bgUrl2 from 'static/landscape.jpg'

export default {
  data () {
    return {
      pageContent: 'B',
      note: {
        backgroundImage: `url("${bgUrl}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      note_tow: {
        backgroundImage: `url("${bgUrl2}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      homeContent: [],
      projectContent: []
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
    },
    goHomeList () {
      this.$router.push('/home/menu')
    },
    goProjectList () {
      this.$router.push('/home')
    },
    ...mapMutations({
    }),
    ...mapActions({
      getMenuList: 'getMenuList'
    })
  },
  watch: {
    '$route' (to, from) {
      console.log(to.path)
      console.log(from)
      if (to.path === '/') {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
    }
  },
  components: {
    goPage
  }
}

</script>

<style scoped>
.about{
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
  overflow: hidden;
}
.getIcon{
  width: 100px;
  height: 160px;
  display: inline-block;
  position: relative;
}
.getDefault{
  background-color: rgb(255,255,255);
  position: absolute;
  left: 20px;
  top: 20px;
}
.aboutTitle{
  height: 100%;
  margin-left: 20px;
}
.aboutMain{
  width: 60%;
  position: absolute;
  right: 50px;
  top: 120px;
}
.menuList{
  width: 100%;
  height: 160px;
  margin-bottom: 20px;
  overflow: hidden;
}
.menuList div p{
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
  padding: 10px;
}
.menuList div:hover > p{
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 1;
  transition: all .4s
}
.menuList div p span{
  display: inline-block;
  height: 20px;
  line-height: 20px;
  padding: 5px;
  border: 1px solid yellow;
  border-radius: 5px;
  margin: 5px;
}
.menuList h2{
  width: 160px;
  height: 160px;
  line-height: 160px;
  text-align: center;
  float: left;
  padding-left: 20px;
}
.menuList div{
  width: calc(50vw - 160px);
  height: 160px;
  float: right;
}
 /* 滑入的动画 */
/* .slide-enter-active, .slide-leave-active{
  transition : all 0.8s cubic-bezier(0.82,0,0.05,1)
}
.slide-enter, .slide-leave-to{
  transform : translate3d(100%, 0 ,0)
} */
</style>
