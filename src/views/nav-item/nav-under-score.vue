<template>
  <div class="container">
    <el-button class="margin-btn" type="primary" size="small" @click="eachClick">each</el-button>
    <el-button class="margin-btn" type="primary" size="small" @click="eachClick">each</el-button>
    <el-button class="margin-btn" type="primary" size="small" @click="eachClick">each</el-button>
    <el-button class="margin-btn" type="primary" size="small" @click="eachClick">each</el-button>
  </div>
</template>

<script>
export default {
  name: 'NavUnderScore',
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
    eachClick() {
      this.$_.each([1,2,3], alert)
    }
  }
}
</script>

<style lang="scss" scoped>
.margin-btn {
  margin: 20px;
}
</style>