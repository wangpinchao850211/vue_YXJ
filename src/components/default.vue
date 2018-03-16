<template>
  <div class="default">
    <div class="getIcon">
      <span class="getDefault"></span>
      <span class="navigation">Navigation ————</span>
    </div>
    <div class="navList">
      <h1>hello webWorker...</h1>
      <div class="navMenu">
        <h1>Home</h1>
        <h1>Project</h1>
        <h1>About</h1>
        <h1>History</h1>
      </div>
    </div>
    <div class="workerLife">
        <h1>People</h1>
        <h1>Links</h1>
      </div>
  </div>
</template>

<script>
export default {
  name: 'default',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.default{
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  border: 20px solid  rgb(82, 84, 83);
  background-color: rgb(93, 95, 94);
}
.getIcon{
  width: 480px;
  height: 160px;
  display: inline-block;
  /* border: 1px solid blue; */
  position: relative;
}
.getDefault{
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: rgb(255,255,255);
  position: absolute;
  left: 20px;
  top: 20px;
}
.default .getIcon .navigation{
  position: absolute;
  right: 24px;
  top: 30px;
  font-family: ClarendonLTStdBold;
  font-weight: 800;
  font-size: 14px;
  color: rgb(185, 191, 187);
}
.default .navList{
  position: relative;
  color: rgb(185, 191, 187);
  /* border: 2px solid red; */
}
.default .navList > h1{
  /* 在main.js引入字体库后，直接在css里即可使用了 */
  font-family: ClarendonLTStdBold;
  font-size: 24px;
  font-weight: 400;
}
.default .navList > h1:nth-child(1) {
  margin-left: 20px;
  font-size: 22px;
  font-weight: 600;
  color: rgb(255,255,255);
}
.navMenu{
  position: absolute;
  right: 66%;
  top: -16px;
}
.navMenu h1:hover{
  color: rgb(255,255,255);
  cursor: pointer;
}
.workerLife{
  position: absolute;
  right: 40px;
  bottom: 160px;
  /* border: 1px solid greenyellow; */
}
.workerLife h1:hover{
  color: gainsboro;
  cursor: pointer;
}
</style>
