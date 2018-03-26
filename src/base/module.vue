<template>
  <div class="module">
    基础模型
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: Array,
      default: null
    }
  },
  created () {
    console.log(this.content)
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style scoped>
.module{
  color: rgb(80, 80, 80);
  font-size: 34px;
  text-align: center;
  line-height: 46px;
  cursor: pointer;
}
</style>