<template>
  <CSidebar
    fixed
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('page/set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <h3 class="c-sidebar-brand-minimized">JS</h3>
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="navBar" />
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('page/set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import nav from "./_nav";
export default {
  name: "TheSidebar",
  nav,
  computed: {
    show() {
      return this.$store.state.page.sidebarShow;
    },
    minimize() {
      return this.$store.state.page.sidebarMinimize;
    },
    navBar() {
      let clone = _.cloneDeep(nav);
      return _.filter(clone, (item) => {
        item._children = _.filter(item._children, (child) => {
          return child.role.length == 0;
        });
        return true;
      });
    },
  },
  methods: {},
};
</script>
