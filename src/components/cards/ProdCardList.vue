<template>
  <article class="product-list" :style="{ '--col': col }">
    <slot name="default"></slot>
  </article>
</template>

<script setup lang="ts">
withDefaults(defineProps<Props>(), {
  col: 4
});
</script>

<style lang="scss" scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(var(--col), 1fr);
  gap: 10px;
}
</style>

<script lang="ts">
interface Props {
  col: number;
}
</script>
