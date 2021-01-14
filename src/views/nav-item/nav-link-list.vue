<template>
  <div class="container">
    linkList
    <!-- <el-button class="margin-btn" type="primary" size="small" @click="initClick">init</el-button> -->
    <el-button class="margin-btn" type="primary" size="small" @click="addClick">add</el-button>
    <el-button class="margin-btn" type="primary" size="small" @click="deleteClick">delete</el-button>
    <el-button class="margin-btn" type="primary" size="small" @click="updateClick">update</el-button>
    <el-button class="margin-btn" type="primary" size="small" @click="findClick">find</el-button>
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
    // 改
    updateClick() {
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
</style>