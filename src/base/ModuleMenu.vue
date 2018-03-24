<template>
  <div id="menu" :style="styleNote">
    <ul id="flow">
      <li v-if="menu.length>0" class="theLi" v-for="(item, index) in menu" :key="index">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <line class="top" x1="0" y1="0" x2="200" y2="0" />
          <line class="left" x1="0" y1="100%" x2="0" y2="-100%" />
          <line class="bottom" x1="200" y1="100%" x2="0" y2="100%" />
          <line class="right" x1="200" y1="0" x2="200" y2="100%" />
				</svg>
        <div class="mask">
          <h2>{{item.title}}</h2>
          <div>
            <span v-for="(ite, ind) in item.content.split('@')" :key="ind">{{ite}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import store from 'store'
import {mapGetters, mapActions} from 'vuex'
import {getRandomColor, getRandomNumber, getIndexByFlag, doAction} from 'utils/index'
import bgUrl from 'static/areatom.jpg'

async function getHomeMenu (params) {
  console.log(params)
  const that = params
  const homeType = params.menuType
  await store.dispatch('GetHomeList', homeType)
  console.log(store.getters.homeMenuList.homeMenu)
  that.menu = store.getters.homeMenuList.homeMenu
}

export default {
  data () {
    return {
      // 在页面上写标签了，标签上使用v-for数据绑定，页面的渲染就要等待数据加载下来才会显示，所以这个位置现在是获取不到dom了，还得在方法里直接获取，方可
      screenWidth: null,
      liSpace: 80,
      liWidth: 200,
      colHeightArr: [], // 存放每列高度的数组
      timer: false, // 防止window.resize卡的问题
      menu: [],
      styleNote: {
        backgroundImage: `url("${bgUrl}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }
    }
  },
  props: {
    menuType: {
      type: Number,
      default: null
    }
  },
  filters: {
    contentFilter (item) {
      if (!item) return ''
      console.log(item)
      return item
    }
  },
  computed: {
    ...mapGetters([
      'aboumenulist'
    ])
  },
  created () {
    // keng1：折腾我小下午啊！list没数据，一直填不上！！！最后还是用这种形式的获取了。坑2：父组件传过来的paramList是异步的太慢了，导致这个页面加载获取不到，并未使用paramList
    // setTimeout(() => {
    //   console.log(this.paramList)
    //   this.menu = this.paramList
    // }, 20)
    if (this.menuType === 1) {
      // this.menu = this.$store.getters.aboumenulist.homeList
      doAction(getHomeMenu, this)
    }
  },
  mounted () {
    // 循环创建li（原生写法js创建）
    // dom节点用实例变量接收，在this.$nextTick里接收不到！！！需要在方法内部直接获取
    // this.$nextTick(() => {
    const that = this
    setTimeout(() => {
      // 在这个函数里面直接获取dom进行操作（后期代码注掉是在页面上写标签了）
      // const theFlow = document.getElementById('flow')
      const theLi = document.getElementsByTagName('li')
      for (let i = 0; i < theLi.length; i++) {
        // let li = document.createElement('li')
        // 改成下面的，可以直接在页面上写标签的形式，只是布局方面在js里写的
        // 为每个li赋值随机的高度:
        theLi[i].style.height = getRandomNumber(240, 280) + 'px'
        theLi[i].style.backgroundColor = getRandomColor()
        theLi[i].style.lineHeight = theLi[i].style.height
        // theFlow.appendChild(li)
      }
      that.init()
      that.layout()
      // const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.getElementById('menu').clientWidth
          that.screenWidth = window.screenWidth
        })()
      }
    }, 660) // 这个位置加成600ms的延迟，才会渲染成功，如果数据量大的话，估计时间还要变长
    // })
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
#menu{
  width: 100%;
  height: 100%;
  /* background-color: darkcyan; */
  /* 在这加个这个就产生滚动条了OK */
  overflow: scroll;
}
#flow{
  position: relative;
  margin: auto;
}
/* 实例里创建的元素，这里提前定义样式，并不起效果 因为scoped*/
</style>
