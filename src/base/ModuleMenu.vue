<template>
  <div id="homeMenu">
    <ul id="flow"></ul>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {getRandomColor, getRandomNumber, getIndexByFlag} from 'utils/index'

export default {
  data () {
    return {
      screenWidth: document.getElementById('homeMenu').clientWidth,
      liSpace: 20,
      liWidth: 200,
      colHeightArr: [], // 存放每列高度的数组
      timer: false
    }
  },
  props: {
    paramList: {
      type: Array,
      default: null
    }
  },
  computed: {
    ...mapGetters([
      'aboumenulist'
    ])
  },
  created () {
    // 折腾我小下午啊！list没数据，一直填不上！！！
    this.$nextTick(() => {
      console.log(this.paramList)
    })
  },
  mounted () {
    // 循环创建li
    // dom节点用变量接收，在this.$nextTick里接收不到！！！
    this.$nextTick(() => {
      const theFlow = document.getElementById('flow')
      console.log(theFlow)
      for (let i = 0; i < this.paramList.length; i++) {
        let li = document.createElement('li')
        // 为每个li赋值随机的高度:
        li.style.height = getRandomNumber(100, 300) + 'px'
        li.style.backgroundColor = getRandomColor()
        li.innerHTML = i + 1
        li.style.lineHeight = li.style.height
        theFlow.appendChild(li)
      }
      this.init()
      this.layout()
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.getElementById('homeMenu').clientWidth
          that.screenWidth = window.screenWidth
        })()
      }
    })
  },
  watch: {
    screenWidth (val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        let that = this
        setTimeout(function () {
          console.log(that.screenWidth)
          that.init()
          that.layout()
          that.timer = false
        }, 400)
      }
    }
  },
  methods: {
    // 设置UL的宽度:
    init () {
      // 这个位置也接收不到到this.flowUL
      const theFlow = document.getElementById('flow')
      let myWidth = document.body.clientWidth - this.liSpace
      let colNum = Math.floor(myWidth / (this.liSpace + this.liWidth))
      theFlow.style.width = colNum * (this.liSpace + this.liWidth) + this.liSpace + 'px'
      // 初始化存放高度的数组
      for (let j = 0; j < colNum; j++) {
        this.colHeightArr[j] = 0
      }
    },
    // 为所有的li布局
    layout () {
      let liArr = document.getElementsByTagName('li')
      // 遍历数组,为每个li设置位置
      for (let m = 0; m < liArr.length; m++) {
        let liEvery = liArr[m]
        // 找到数组中高度最小的那一列下标:
        let minIndex = getIndexByFlag(false, this.colHeightArr)
        // 设置li的left和top值
        liEvery.style.left = minIndex * (this.liSpace + this.liWidth) + this.liSpace + 'px'
        liEvery.style.top = this.colHeightArr[minIndex] + this.liSpace + 'px'
        // 实时更新这一列的高度
        this.colHeightArr[minIndex] += liEvery.clientHeight + this.liSpace
      }
    },
    ...mapActions({})
  }
}
</script>
<style scoped>
#homeMenu{
  width: 100%;
  height: 100%;
  background-color: darkcyan;
  /* 在这加个这个就产生滚动条了OK */
  overflow: scroll;
}
#flow{
  position: relative;
  margin: auto;
}
/* 实例里创建的元素，这里提前定义样式，并不起效果 因为scoped*/
</style>
