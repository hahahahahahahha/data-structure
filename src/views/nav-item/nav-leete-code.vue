<template>
  <div class="container">
    <div>
      LeeteCode
    </div>
    <p>
      LeeteCode
    </p>
    <span>LeeteCode</span>
    <el-button class="margin-btn" type="primary" size="small" @click="test1Click">斐波那契数列-递归</el-button>
    <el-button class="margin-btn" type="primary" size="small" @click="test2Click">斐波那契数列-备忘录的递归解法</el-button>
    <el-button class="margin-btn" type="primary" size="small" @click="test3Click">斐波那契数列-动态规划</el-button>
  </div>
</template>

<script>
export default {
  name: 'NavLeeteCode',
  components: {},
  mixin: {},
  directives: {},
  filters: {},
  props: {},
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  mounted() {
  },
  methods: {
    fib1(n) {
      if (n === 1 || n === 2) return 1 
      return this.fib1(n-1) + this.fib1(n-2)
    },
    test1Click() {
      console.log('test1Click', this.fib1(7))
    },
    test2Click() {

    },
    fib3(n) {
      const dp = new Array(n)
      dp[0] = dp[1] = 1
      for (let i = 2; i < n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
      }
      return dp[n-1]
    },
    test3Click() {
      console.log('test3Click', this.fib3(7))
    }
  }
}
</script>

<style lang="scss" scoped>
.margin-btn {
  margin: 20px;
}
</style>