<template>
  <nav>
    <ul class="menus">
      <NavWrapperSubMenu :ddd="1" />
      <NavWrapperSubMenu />
      <NavWrapperSubMenu />
      <NavWrapperSubMenu />
      <NavWrapperSubMenu />
      <NavWrapperSubMenu />
      <NavWrapperSubMenu />
      <NavWrapperSubMenu />
      <NavWrapperSubMenu />
      <NavWrapperSubMenu />
      <NavWrapperSubMenu />
      <NavWrapperSubMenu />
      <NavWrapperSubMenu />
    </ul>
  </nav>
</template>
<script setup lang="ts">
import NavWrapperSubMenu from './NavWrapperSubMenu.vue';
</script>
<style lang="scss" scoped>
nav {
  background-color: var(--color-vue-green-light-1);
}
.menus {
  display: flex;
  align-items: center;
  overflow-x: auto;
}
</style>
