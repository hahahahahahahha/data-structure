<template>
  <div>
    <h6>链表翻转</h6>
    <el-button class="margin-btn" type="primary" size="small" @click="initClick">init</el-button>
    <el-button class="margin-btn" type="primary" size="small" @click="reverseClick">翻转</el-button>
  </div>
</template>

<script>
import {List} from "@/views/class/link-class.js";
export default {
  name: 'NavLinkListQuestion',
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
      for (let i = 0; i < 10; i++) {
        this.link.insert(i)
      }
      this.printLinkList()
    },
    // 翻转
    reverseClick() {
      
      this.printLinkList()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>