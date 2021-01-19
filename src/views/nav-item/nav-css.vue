<template>
  <div class="nav-container">
    <h6>圣杯布局</h6>
    <div class="container clearfix">
      <div class="middle">middle</div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
    <hr>
    <h6>双飞翼布局</h6>
    <div class="container02 clearfix">
      <div class="middle02">middle</div>
    </div>
    <div class="left02">left</div>
    <div class="right02">right</div>
    <hr>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.clearfix:after {
  content: "";
  clear: both;
  display: block;
}
h6 {
  line-height: 40px;
  text-align: center;
}
.container {
  padding: 0 200px;
  position: relative;
}
.middle {
  background-color: lightpink;
  height: 300px;
  width: 100%;
  float: left;
}
.left {
    background-color: red;
    height: 300px;
    width: 200px;
    float: left;
    margin-left: -100%;
    position: relative;
    left: -200px;
}

.right {
    background-color: aqua;
    height: 300px;
    width: 200px;
    float: left;
    margin-left: -200px;
    position: relative;
    right: -200px;

}
// 双飞翼布局
.container02 {
  width: 100%;
  height: 300px;
  float: left;
  background-color: lightpink;

}
.middle02 {
  margin: 0 200px;
}
.left02 {
  width: 200px;
  height: 300px;
  margin-left: -100%;
  background-color: red;
  float: left;
}
.right02 {
  width: 200px; 
  height: 300px;
  margin-left: -200px;
  background-color: aqua;
  float: left;
}

</style>
