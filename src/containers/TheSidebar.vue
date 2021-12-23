<template>
  <CSidebar
    fixed
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('page/set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <h3 class="c-sidebar-brand-full">JAVIS Smart</h3>
      <h3 class="c-sidebar-brand-minimized">JS</h3>
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="$options.nav" />
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
  },
};
</script>
