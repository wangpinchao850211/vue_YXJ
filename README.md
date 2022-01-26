# webible

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 各组件的技术点汇总
1、home，ModuleMenu组件，在vue中使用了瀑布流技术，svg描边动画技术
2、module组件，主要做的是登录加密(`使用crypto-js，qs(Qs.stringify将数据安全转换成传输数据)`)，和记住me功能
3、webContent组件： 主要使用了编辑器，树形目录
4、公用函数在utils/index: `获取数组中最小值的下标，随机数，随机颜色`