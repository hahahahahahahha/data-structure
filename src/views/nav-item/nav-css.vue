<template>
  <div class="container">
    <h6>圣杯布局</h6>
    <div class="main clearfix"> main
      <div class="center">center</div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
    <hr>
    <h6>双飞翼布局</h6>
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
.main {
  position: relative;
  height: 500px;
  padding: 0 200px;
  background: lightgray;
}
.center,
.left,
.right {
  float: left;
}
.center {
  width: 100%;
  min-height: 200px;
  background: lightcoral;
}
.left {
  width: 200px;
  min-height: 200px;
  background: lightgoldenrodyellow;

  margin-left: -100%;
  position: absolute;
  left: -200px;
}
.right {
  width: 200px;
  min-height: 200px;
  background:limegreen
}



</style>
