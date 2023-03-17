<template>
  <div class="main-title">
    <h3>{{ text }}</h3>
    <BasicButton v-if="isMore" class="btn--primary">더보기</BasicButton>
  </div>
</template>

<script setup lang="ts">
import BasicButton from '@/components/buttons/BasicButton.vue';

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
    margin-right: 10px;
  }
}
</style>
