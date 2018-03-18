<template>
    <div id="app">
      <router-view></router-view>
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
</style>
