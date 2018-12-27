/*
* 获取一个指定范围的随机数
* min:左侧范围
* max:右侧范围
* */
export function getRandomNumber (min, max) {
  if (min > max) {
    var temp = min
    min = max
    max = temp
  }
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/*
* 获取随机颜色:
* */
export function getRandomColor () {
  var redValue = getRandomNumber(0, 255)
  var greenValue = getRandomNumber(0, 255)
  var blueValue = getRandomNumber(0, 255)
  return 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')'
}

/*
* 获取数组中最小值的小标
* flag:最大值传入true ,最小值传入false
* array:需要查询的数组
* */
export function getIndexByFlag (flag, array) {
  let Index = 0
  let value = array[0]
  if (flag) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > value) {
        Index = i
        value = array[i]
      }
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < value) {
        Index = i
        value = array[i]
      }
    }
  }
  return Index
}
// 做异步请求函数
const actions = new WeakMap()
export function doAction (func, params) {
  if (!actions.has(func)) {
    actions.set(func, true)
  }
  // 控制异步流程顺序执行，以便捕获异常和函数结束后做通用处理
  async function f () {
    try {
      // await store.dispatch('StartLoading');
      // console.log('start loading');
      await func(params)
      // setTimeout(() => store.dispatch('EndLoading'));
      // console.log('end loading');
    } catch (error) {
      console.log('catched')
      console.log(error)
    }
  }
  if (actions.get(func)) {
    actions.set(func, false)
    setTimeout(() => actions.set(func, true), 1000)
    f() // 第一次调用的地方
  }
}
