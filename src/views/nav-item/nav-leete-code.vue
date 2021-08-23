<template>
  <div class="container">
    <div>
      leetcode
    </div>
    <p>
      leetcode
    </p>
    <span>leetcode</span>
    <el-button class="margin-btn" type="primary" size="small" @click="test1Click">斐波那契数列-递归</el-button>
    <el-button class="margin-btn" type="primary" size="small" @click="test2Click">斐波那契数列-备忘录的递归解法</el-button>
    <el-button class="margin-btn" type="primary" size="small" @click="test3Click">斐波那契数列-动态规划</el-button>
    <hr>
      <p>硬币面值： 1 3 5</p>
      <el-form :model="form" inline>
        <el-form-item label="请输入兑换总数">
          <el-input v-model="form.amount" type="text" placeholder="请输入兑换总数"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="margin-btn" type="primary" size="small" @click="test4Click">兑换</el-button>
        </el-form-item>
      </el-form>
      <p>结果： {{result}}</p>
    <hr>

    <!-- <div class="wraper">
      <label for="" class="title">时间范围选取</label>
      <ul class="list">
        <li v-for="(item, index) in listItem" :key="index"  class="list__item" :class="{'list__item--active': selectIndex === index}" @click="selectClick(index)">{{item}}</li>
      </ul>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Navleetcode',
  components: {},
  mixin: {},
  directives: {},
  filters: {},
  props: {},
  data() {
    return {
      listItem: ['全部', '本学期', '近30天', '近7天'],
      selectIndex: 0,
      form: {
         amount: null
      },
      result: 0
    }
  },
  computed: {},
  watch: {},
  mounted() {
  },
  methods: {
    selectClick(index) {
      this.selectIndex = index
    },
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
    },
    coinChange(coins, amount) {
      let dp = new Array(amount+1).fill(Infinity)
      dp[0] = 0
      for (let i = 1; i <= amount; i++) {
       for (let coin of coins) {
        if (i - coin >= 0) {
          dp[i] = Math.min(dp[i], dp[i-coin] + 1)
        }
       }
      }
      console.log("🚀 ~ file: nav-leete-code.vue ~ line 89 ~ coinChange ~ dp", dp)
      return dp[amount] == Infinity ? -1 : dp[amount]
    },
    test4Click() {
     this.result = this.coinChange([1,3,5],+this.form.amount)
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
}
.wraper {
  display: flex;
  align-items: center;
  background: gray;
  line-height: 40px;
}
.title {
  margin-right: 20px;
}
.list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.list__item {
  margin: 0 16px 0 0;
  padding: 0 16px;
  line-height: 24px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}
.list__item--active {
  color: #fff;
  background-color:orange;
  border-radius: 4px;
}

.margin-btn {
  margin: 20px;
}
</style>