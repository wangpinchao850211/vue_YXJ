<template>
  <div class="getgoIcon" @click="getGo">
    {{page}}
  </div>
</template>
<script>
export default {
  props: {
    page: ''
  },
  methods: {
    getGo () {
      this.$emit('goPage')
    }
  }
}
</script>
<style scoped>
.getgoIcon{
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: rgb(255,255,255);
  color: rgb(80, 80, 80);
  font-size: 34px;
  text-align: center;
  line-height: 46px;
  cursor: pointer;
}
/* .largeBack{
  width: 100px;
  height: 46px;
  border-radius: 10px;
  background-color: blanchedalmond;
  color: darkslategrey;
  font-size: 18px;
  text-align: center;
  line-height: 46px;
  position: relative;
  left: 16px;
  top: 24px;
  cursor: pointer;
} */
</style>
