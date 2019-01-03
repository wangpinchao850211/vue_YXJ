<template>
    <div id="app">
      <router-view class="routerView"></router-view>
    </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
  },
  // 只有app跟组件可以监控路由啊！！！
  watch: {
    '$route' (to, from) {
      console.log(to.path)
      console.log(from)
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
}
.routerView{
  position: absolute;
}
/* .icon { 字体图标class
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
.iconfont {
  font-size: 20px;
  padding: 8px;
} */
</style>
