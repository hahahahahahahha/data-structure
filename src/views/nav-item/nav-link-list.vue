<template>
  <div class="container">
    <h6 class="text-center">单向链表</h6>
    <el-button class="margin-btn" type="primary" size="small" @click="addClick">add</el-button>
    <el-button class="margin-btn" type="primary" size="small" @click="deleteClick">delete</el-button>
    <el-button class="margin-btn" type="primary" size="small" @click="findClick">find</el-button>
    <el-button class="margin-btn" type="primary" size="small" @click="testClick">test</el-button>
    <div class="test"><span>test</span></div>
    <hr>
    <h6 class="text-center">双向链表</h6>
    <hr>
    <h6 class="text-center">循环链表</h6>
    <hr>
  </div>
</template>

<script>
import {List} from "@/views/class/link-class.js";
export default {
  name: 'NavLinkList',
  components: {},
  mixin: {},
  directives: {},
  filters: {},
  props: {},
  data() {
    return {
      link: null,
      value: 1
    }
  },
  computed: {},
  watch: {},
  mounted() {
    this.initClick()
  },
  methods: {
    testClick() {
      const ele = document.getElementsByClassName('test')[0]
      ele.innerHTML = '娃哈哈'
      // ele.innerText = '娃哈哈'
      console.log(ele)

    },
    // 打印
    printLinkList() {
     console.log(this.link.toString())
    },
    // 初始化
    initClick() {
      this.link = new List()
    },
    // 增
    addClick() {
      this.link.insert(this.value++)
      this.printLinkList()
    },
    // 删
    deleteClick() {
       this.link.delete(5)
      // console.log('delete', node);
      this.printLinkList()
    },
    // 查
    findClick() {
      const node = this.link.find(5)
      console.log('find', node);
      this.printLinkList()
    }
    
  }
}
</script>

<style lang="scss" scoped>
.margin-btn {
  margin: 20px;
}
.text-center {
  line-height: 40px;
  text-align: center;
}
</style>