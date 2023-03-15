<template>
  <nav>
    <ul class="menus">
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
  padding: 0 20px;
}
.menus {
  display: flex;
  align-items: center;
}
</style>
