<template>
  <header>
    <LogoWrapper />
    <NaviWrapper />
  </header>
</template>
<script setup lang="ts">
import useAxios, { AxiosMethod } from '@/composable/useAxios';
import LogoWrapper from './components/LogoWrapper.vue';
import NaviWrapper from './components/NaviWrapper.vue';

const { data } = useAxios('https://koreanjson.com/posts/1', AxiosMethod.GET, {});
console.log(data);
</script>
<style lang="scss" scoped>
header {
  background-color: var(--color-vue-green-light-0);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
