<template>
  <a-config-provider prefixCls="cns">
    <section id="cns-main-app">
      <section class="cns-menu-wrapper">
        <main-menu :menus="menus" />
      </section>
      <section class="cns-frame-wrapper">
        <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
        <router-view v-show="$route.name" />

        <!-- 子应用渲染区，用于挂载子应用节点 -->
        <section v-show="!$route.name" id="frame"></section>
      </section>
    </section>
  </a-config-provider>
</template>

<script>
import MainMenu from './components/menu/index.vue'

export default {
  name: 'App',
  components: {
    MainMenu
  },
  data() {
    return {
      /**
       * 菜单列表
       * key: 唯一 Key 值
       * title: 菜单标题
       * path: 菜单对应的路径
       */
      menus: [
        {
          key: "Home",
          title: "主页",
          path: "/"
        },
        {
          key: "ReactMicroApp",
          title: "React 主页",
          path: "/react"
        },
        {
          key: "VueMicroApp",
          title: "Vue 主页",
          path: "/vue"
        },
        {
          key: "VueMicroAppList",
          title: "Vue 微应用列表页",
          path: "/vue/list"
        },
        {
          key: "StaticMicroApp",
          title: "Static 微应用",
          path: "/static"
        },
        {
          key: "Login",
          title: "登录",
          path: "/login"
        }
      ],
    };
  }
}
</script>

<style lang="less" scoped>
#cns-main-app {
  height: 100%;
  position: relative;
  .cns-menu-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 40;
    width: 172px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .cns-nav-wrapper {
    position: fixed;
    width: 100%;
    min-width: 1060px;
    padding-left: 172px;
    left: 0;
    top: 0;
    z-index: 30;
  }
}

.cns-frame-wrapper {
  padding-left: 172px;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  position: relative;
}

#cns-frame {
  width: 100%;
  height: 100%;
  > :first-child {
    height: 100%;
  }
}
</style>
