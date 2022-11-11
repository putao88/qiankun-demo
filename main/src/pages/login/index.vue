<template>
  <section class="login-container">
    <a-button size="large" type="primary" @click="login">Login</a-button>
    <div>当前token为: {{token}}</div>
  </section>
</template>

<script>
import actions from "@/shared/actions";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      token: '-'
    }
  },
  // `mounted` 是 Vue 的生命周期钩子函数，在组件挂载时执行
  mounted() {
    // 注册一个观察者函数
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log("主应用观察者：token 改变前的值为 ", prevState.token);
      console.log("主应用观察者：登录状态发生改变，改变后的 token 的值为 ", state.token);
      // this.$router.push("/");
    });
  },
  methods: {
    login() {
      // ApiLoginQuickly 是一个远程登录函数，用于获取 token，详见 Demo
      this.token = '7gdr6ok53dhj7q4p6v1ofmiji5'
      // 登录成功后，设置 token
      actions.setGlobalState({ token: this.token });
    }
  }

}
</script>

<style lang="less" scoped>
@import "~@/assets/styles/flex.less";

.login-container {
  padding: 30px;
}
</style>
