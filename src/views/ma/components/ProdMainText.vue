<template>
  <div class="main-title">
    <h3>{{ text }}</h3>
    <button v-if="isMore" class="btn--primary">더보기</button>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<Props>(), {
  text: '',
  isMore: false
});
</script>

<script lang="ts">
interface Props {
  text: string;
  isMore?: boolean;
}
</script>

<style lang="scss" scoped>
.main-title {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
