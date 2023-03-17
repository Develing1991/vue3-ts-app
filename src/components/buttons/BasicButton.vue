<template>
  <button>
    <slot name="default"></slot>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped>
button {
  background-color: transparent;
  outline: none;
  border: none;
  box-sizing: border-box;
  color: var(--color-vue-black);
  cursor: pointer;
}

button.btn--primary {
  border: 2px solid var(--color-vue-green-dark-0);
  background-color: var(--color-vue-green-dark-0);
  padding: 5px 10px;
  border-radius: 4px;
  color: white;
  word-break: keep-all;
}
</style>
