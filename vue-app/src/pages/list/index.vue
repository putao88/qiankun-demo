<template>
  <section>
    <a-card title="Vue 微应用列表页"></a-card>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "List" ,

  data() {
    return {
      data: [],
      pageInfo: {
        onChange: page => this.fetchVegetable(page, 10)
      },
    }
  },
  
  methods: {
  },

  created() {
    // this.fetchVegetable(1, 10);
  }
}
</script>

<style lang="less" scoped>
.old-title {
  font-size: 26px;
  color: #fb4487;
}
</style>
