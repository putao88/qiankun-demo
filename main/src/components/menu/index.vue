<template>
  <section class="cns-main-menu">
    <a-menu mode="inline" theme="dark" :selectedKeys="[selectKey]">
      <a-menu-item v-for="item in menus" :key="item.key" @click="changeMenu(item)">
        <router-link :to="{path: item.path }">
          <a-icon v-if="item.icon" :type="item.icon" />
          <span>{{item.title}}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Menu",
  props: {
    menus: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [],
    }
  },
  watch: {
    $route() {
      console.log('menu change')
    }
  },
  data() {
    return {
      selectKey: "",
    }
  },
  created() {
    this.initMenus();
  },
  methods: {
    onPathChange() {
      this.initMenus();
    },

    initMenus() {
      const currentMenu = this.findCurrentMenu(this.menus,this.$route.path);
      if (!currentMenu) return;
      const { key } = currentMenu;
      this.selectKey = key;
    },

    findCurrentMenu( menus,currentPath) {
      for (let i = 0; i < menus.length; i++) {
        const menu = menus[i];
        const { path } = menu;
        if (path === currentPath) return menu;

        const currentMenu = this.findCurrentMenu(
          menu.children || [],
          currentPath
        );
        if (currentMenu) return currentMenu;
      }
      return null;
    },

    /**
     * 切换菜单
     */
    changeMenu(item) {
      const { key } = item;
      this.selectKey = key;
    }
  }
}
</script>

<style lang="less" scoped>
.cns-main-menu {
  width: 100%;
  height: 100%;
  background: #001529;
  .cns-menu {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  .cns-parent-title {
    font-size: 13px;
    color: rgba(233, 241, 255, 0.75);
  }
  .cns-child-title {
    font-size: 13px;
    color: #fff;
  }
  .cns-child-title:hover {
    color: #408fff;
  }
  /deep/ .cns-menu-sub {
    background: rgb(12, 28, 53);
  }
}
</style>