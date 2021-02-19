<template>
  <div class="nav-container">
    <h6>深克隆</h6>
      <el-button class="margin-btn" type="primary" size="small" @click="copyClick">深克隆</el-button>
    <hr>
  </div>
</template>

<script>
import { deepCopy } from "@/views/class/common-question.js";
export default {
  data() {
    return {

    }
  },
  methods: {
    copyClick() {
      const obj = {
        a: 10,
        b: {
          x: 100
        },
        c: [1,2,3],
        d: /^\d+$/
      }

      const obj2 = deepCopy(obj)

      console.log(obj, obj2)
      console.log(obj === obj2)
      console.log(obj.b === obj2.b)
    }
  }
}
</script>

<style lang="scss" scoped>
h6 {
  line-height: 40px;
  text-align: center;
}
</style>
