/*
* 获取一个指定范围的随机数
* min:左侧范围
* max:右侧范围
* */
export const getRandomNumber = function (min, max) {
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
export const getRandomColor = function () {
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
export const getIndexByFlag = function (flag, array) {
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
