<template>
  <li class="menu" @mouseover="onMouseOverMenu" @mouseout="onMouseOverMenu">
    <h2>
      <RouterLink to="/">home</RouterLink>
    </h2>
    <ul class="drop" v-show="dropMenu">
      <li><RouterLink to="/">aaa</RouterLink></li>
      <li><RouterLink to="/">aaa</RouterLink></li>
      <li><RouterLink to="/">aaa</RouterLink></li>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const dropMenu = ref(false);
const onMouseOverMenu = (event: MouseEvent) => {
  dropMenu.value = event.type === 'mouseover';
};
</script>

<style lang="scss">
.menu {
  margin-right: 10px;
  cursor: pointer;
  position: relative;
}

.menu h2 a {
  padding: 15px 10px;
  font-weight: bold;
  display: block;
}

.drop {
  position: absolute;
  background-color: #fff;
  width: 200px;
  border: 1px solid #ddd;

  li:hover {
    background-color: var(--color-vue-black);
    color: #fff;
  }
  li:hover a {
    color: #fff;
  }
  li a {
    padding: 15px 10px;
    font-weight: 700;
    display: block;
  }
}
</style>
