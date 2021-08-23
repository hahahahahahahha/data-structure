<template>
  <div class="container">
    mvvm
    <el-button class="margin-btn" type="primary" size="small">mvvm</el-button>
    <el-button class="margin-btn" type="primary" size="small" @click="testClick">click</el-button>
    <button id="changePage1" type="primary"  @click="page1Click">page1</button>
    <button id="changePage2" type="primary"  @click="page2Click">page2</button>
  </div>
</template>

<script>
window.onpopstate = (event)=>{
    console.log('onpopstate', event.state, location.pathname);
}

export default {
  name: 'NavMvvm',
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
    // 自定义实现call
    Function.prototype.myCall = function (context) {
      // 1. 拿出对象
      context = context ? Object(context): window
      // 2. 给当前对象绑定调用函数
      context.fn = this
      // 3. 取出传入参数
      let args = [...arguments].slice(1)
      // 4. 调用对象上绑定的当前方法
      let r = context.fn(...args)
      // 5. 删除对象上的方法
      delete context.fn
      // 6. 返回执行结果
      return r
    }

    // let age = 100;
    const obj = {
      age: 10
    }
    // console.log('age',age);
    let test = function() {
      console.log('---',this.age);
    }
    test.myCall(obj, 1,2,3,4)
  },
  methods: {
    sequentialDigits(low, high) {
      let res = []
    let lowLen = low.toString().length
    let highLen = high.toString().length
    for(let i=lowLen;i<=highLen;i++){
      console.log(lowLen, highLen);
        for(let j=1;j<=10-i;j++){
            let str = ''
            let num = j
            str += num
            let k = i-1
            while(k--){
                num++
                str += num
            }
            console.log('---',str);
            let ans = parseInt(str)
            if(ans>=low && ans<=high){
                res.push(ans)
            }
        }
    }
    return res    
    },
    testClick() {
      console.log(this.sequentialDigits(100, 300));
    },
    page1Click() {
      document.getElementById("changePage1").addEventListener("click", ()=>{
          const state = {name: 'page1'};
          history.pushState(state, '', 'page1')
      })
    },
    page2Click() {
      document.getElementById("changePage2").addEventListener("click", ()=>{
          const state = {name: 'page2'};
          history.replaceState(state, '', 'page2')
      })

    }
  }
}
</script>

<style lang="scss" scoped>
.margin-btn {
  margin: 20px;
}
</style>