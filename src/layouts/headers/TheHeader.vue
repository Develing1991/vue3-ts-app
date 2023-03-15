<template>
  <header>
    <LogoWrapper />
    <NaviWrapper />
  </header>
</template>
<script setup lang="ts">
import LogoWrapper from './components/LogoWrapper.vue';
import NaviWrapper from './components/NaviWrapper.vue';
</script>
<style lang="scss" scoped>
header {
  background-color: var(--color-vue-green-light-0);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
