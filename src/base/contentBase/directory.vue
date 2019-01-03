<!-- 主内容目录 -->
<template>
  <div class="directoryWrapper">
    <el-scrollbar wrap-class="list" wrap-style="color: red;" view-style="font-weight: bold;" view-class="view-box" :native="true">
      <el-row :span="24" style="margin-top: 10px; text-align: center;">
        <!-- 过滤input，通过watch监听变量变化，进行调取el-tree的filter方法 -->
        <el-input clearable class="filter-input" v-model="filterText" placeholder="请输入关键字进行过滤" size="small" :maxlength='50'>
          <i slot="prefix" class="el-input__icon el-icon-search" @click="searchNode"></i>
        </el-input>
      </el-row>
      <div class="deptTree">
        <el-tree
        class="filter-tree"
        :data="data"
        highlight-current
        :props="defaultProps"
        @node-click="handleNodeClick"
        node-key="id"
        :default-expand-all="loadTreeFlag"
        :default-expanded-keys="defaultExpandedKeys"
        :expand-on-click-node="false"
        @node-collapse="expandOrCollapse"
        @node-expand="expandOrCollapse"
        :render-content="renderContent" ref="tree">
        <!-- 这里显示的节点是通过render-content的JSX渲染函数渲染的 -->
        </el-tree>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filterText: '',
      loadTreeFlag: true, // 是否默认展开所有节点
      defaultExpandedKeys: [], // 默认展开的节点的 key 的数组
      data: [{
        id: 1,
        level: '第一章',
        levelName: '第一章名字',
        children: [{
          id: 4,
          level: '第一节',
          levelName: '第一节名字',
          children: [{
            id: 9,
            level: '第一小节',
            levelName: '第一小节名字'
          }, {
            id: 10,
            level: '第二小节',
            levelName: '第二小节名字'
          }]
        }]
      }, {
        id: 2,
        level: '第二章',
        levelName: '第二章名字',
        children: [{
          id: 5,
          level: '第一节',
          levelName: '第一节名字'
        }, {
          id: 6,
          level: '第二节',
          levelName: '第二节名字'
        }]
      }, {
        id: 3,
        level: '第三章',
        levelName: '第三章名字',
        children: [{
          id: 7,
          level: '第一节',
          levelName: '第一节名字'
        }, {
          id: 8,
          level: '第二节',
          levelName: '第二节名字'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'levelName'
      }
    }
  },

  components: {},

  computed: {},

  watch: {
    filterText (val) {
      // 通过$refs调用filter方法，会制动调取filter-node-method定义的方法
      this.$refs.tree.filter(val)
    }
  },

  created () {},

  //  mounted() {},

  methods: {
    searchNode () {
      console.log(this.filterText)
    },
    handleNodeClick (data, node) {
      console.log(data)
      console.log(node)
    },
    // 节点被展开，关闭时触发的事件（可以定义两个函数处理，参数是相同的）
    expandOrCollapse (data, node) {
      console.log(data)
      console.log(node)
    },
    // jsx语法渲染
    renderContent (h, { node, data }) { // 渲染的结构都在这个函数里
      return (
        <span class="tree-row">
          <span class="tree-row-content">
            <span class="tree-row-label">[{ data.level }]{ data.levelName }</span>
          </span>
          <span class="deptItemBtnBar">
            <el-button
              type="text"
              on-click={() => this.append(data)}
            >
              <i class="el-icon-plus"></i>
            </el-button>
            <el-button
              type="text"
              on-click={() => this.update(node, data)}
            >
              <i class="el-icon-edit"></i>
            </el-button>
            <el-button
              type="text"
              on-click={() => this.remove(node, data)}
            >
              <i class="el-icon-delete"></i>
            </el-button>
            <el-button
              type="text"
              on-click={() => this.start(node, data)}
            >
              <i class="el-icon-setting"></i>
            </el-button>
          </span>
        </span>
      )
    },
    // 添加节点：类似下面的逻辑
    append (data) {
      console.log(data)
      const newChild = { id: id++, label: 'categoryName', children: [] }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
    },
    update (node, data) {
      console.log(data)
    },
    // 移除节点，类似下面的逻辑
    remove (node, data) {
      console.log(data)
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    },
    start (node, data) {
      console.log(data)
    }
  }
}

</script>

<style lang='scss'>
// el-scrollbar父级设置宽度可以进行左右定位滚动条
.directoryWrapper{
  width: 100%;
  height: 100%;
}
/*展示列表的区域，超过200px出现滚动条*/
.list {
  max-height: 100vh;
  margin-top: -7px;
}
.filter-input{
  width: 96%;
  margin: 0 auto;
}
.deptTree {
  width: 100%;
  height: calc(100vh - 100px); // 滚动条子级设置高度会显示滚动条
  margin-top: 10px;
}
// 考虑滚动条随树节点高度自动显现
.filter-tree{
  min-height: calc(100vh - 100px);
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
// 下面是控制hover状态出现编辑功能按钮
.el-tree-node__content {
    display: flex;
    align-items: center;
    line-height: 32px;
    height: 32px;
    .tree-row {
      width: 100%;
      display: flex;
      align-items: center;
      position: relative;
      .tree-row-content {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 200px;
        display: block;
      }
      .colorText {
        display: block;
        margin-left: 4px;
      }
    }
    .deptItemBtnBar {
      display: block;
      width: 76px;
      float: right;
      visibility: hidden;
      margin-right: -16px;
      position: absolute;
      right: 0;
      top: 0;
      .el-button{
        width: 20%;
        font-size: 12px;
        margin: 0;
        padding: 0;
      }
      i {
        line-height: 32px;
      }
    }
    &:hover {
      .deptItemBtnBar {
        visibility: visible;
      }
    }
  }
  .el-tree-node__content:hover {
    background-color: #f7f8fa;
  }
</style>
