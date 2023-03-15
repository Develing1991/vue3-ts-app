<template>
  <form @click.prevent="">
    <label for="search"></label>
    <input type="text" id="search" />
  </form>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
input {
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid;
  border-color: #8e8e8e;
  font-size: 0.875rem;
  padding: 10px 15px;
}
</style>
