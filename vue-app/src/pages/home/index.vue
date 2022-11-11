<template>
  <section style="padding: 20px; color: red;">
    Vue App
    <div>vue微应用token: {{token}}</div>
  </section>
</template>
<script>
import actions from "@/shared/actions"
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data() {
    return {
      token: '-'
    }
  },
  mounted() {
    actions.onGlobalStateChange(state => {
      const { token } = state;
      // 未登录 - 返回主页
      if (!token) {
        this.$message.error("未检测到登录信息！");
      }
      this.token = token
    }, true);
  }
}
</script>