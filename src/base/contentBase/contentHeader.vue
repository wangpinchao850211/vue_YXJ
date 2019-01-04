<!-- 主内容的页头 -->
<template>
  <div class="headerWarapper">
    <ul>
      <li>
        <span>
          <svg @click="toggleSideBar" class="icon icon-contraction" aria-hidden="true">
            <use xlink:href="#icon-contraction"></use>
          </svg>
        </span>
      </li>
      <li>
        <span>Color</span>
        <colorPicker v-model="color" @change="headleChangeColor" class="colorPicker"></colorPicker>
      </li>
      <li>
        <span>Alpha</span>
        <div class="AlphaSlider"><el-slider v-model="Alpha" :min="0" :max="1" :step="0.1" @change="headleChangeAlpha"></el-slider></div>
      </li>
      <li @click="logout">登出</li>
      <li>
        <el-input size="mini" placeholder="请输入内容" v-model="searchVal" @change="searchTextContent" clearable>
          <i slot="prefix" class="el-input__icon el-icon-search" @click="searchTextContent"></i>
        </el-input>
      </li>
      <li @click="Edit">编辑</li>
      <li @click="Read">阅读</li>
    </ul>
  </div>
</template>

<script>
import 'assets/font/iconfont' // 必须要引入一下字体图标

export default {
  data () {
    return {
      color: '#ff0000',
      Alpha: 0.8,
      el: document.getElementsByClassName('wrapper')[0],
      searchVal: ''
    }
  },

  components: {},

  computed: {},

  watch: {},

  created () {},

  //  mounted() {},

  methods: {
    toggleSideBar () {
      const flag = this.$store.getters.opened
      if (flag) {
        this.$store.commit('SET_MENU_OPEN', false)
        this.$store.commit('SET_MENU_WIDTH', 0)
        document.getElementsByClassName('menu')[0].style.transition = 'all 1s'
      } else {
        this.$store.commit('SET_MENU_OPEN', true)
        this.$store.commit('SET_MENU_WIDTH', 5)
        document.getElementsByClassName('menu')[0].style.transition = 'all 1s'
      }
    },
    headleChangeColor () {
      this.el.style.backgroundColor = `${this.color}`
      this.el.style.transitionDuration = '0.8s'
    },
    headleChangeAlpha () {
      this.el.style.opacity = this.Alpha
    },
    searchTextContent () { // 进行内容的搜索
      console.log(this.searchVal)
    },
    Read () {
      this.$emit('readedit', 0)
    },
    Edit () {
      this.$emit('readedit', 1)
    },
    logout () {
      this.$emit('logout')
    }
  }
}

</script>
<style lang='scss' scoped>
.headerWarapper{
  width: 100%;
  height: 66px;
  position: relative;
  background-color: rgba(7, 70, 119, 0.8);
  z-index: 99999;
  svg.icon-contraction {
    display:inline-block;
    width: 22px;
    height: 62px;
    margin-top: -10px;
    margin-left: 19px;
    cursor:pointer;
  }
}
ul{
  width: 100%;
  height: 66px;
  line-height: 66px;
  list-style: none;
}
ul li{
  height: 40px;
  line-height: 40px;
  margin-top: 12px;
  margin-left: 6px;
  display: inline-block;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: aliceblue;
}
ul li:nth-child(1){
  width: 60px;
  float: left;
}
ul li:nth-child(2){
  width: 120px;
  float: left;
  padding-top: 2px;
}

ul li:nth-child(3){
  width: 160px;
  float: left;
  padding-top: 3px;
  span{
    float: left;
  }
}

ul li:nth-child(4){
  width: 100px;
  float: right;
  margin-right: 6px;
}
ul li:nth-child(5){
  width: 200px;
  float: right;
}
ul li:nth-child(6){
  width: 80px;
  float: right;

}
ul li:nth-child(7){
  width: 80px;
  float: right;
}
ul li:nth-child(6):hover, ul li:nth-child(7):hover, ul li:nth-child(4):hover{
  border-bottom: 2px solid rgb(187, 255, 0);
  cursor: pointer;
}
</style>
<style lang='scss'>
.m-colorPicker .colorBtn[data-v-11842410] {
  margin-left: 10px;
  width: 50px;
  height: 6px;
  border-radius: 3px;
}
.AlphaSlider{
  width: 80px;
  margin-left: 14px;
  display: inline-block;
}
</style>
