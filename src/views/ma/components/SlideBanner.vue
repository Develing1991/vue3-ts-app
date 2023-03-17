<template>
  <section class="carosel-wrapper">
    <div class="inner">
      <SlideCrsl :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :autoplay="4000" :wrap-around="true">
        <template #item="{ slide }">
          <div class="carousel__item">slide - {{ slide }}</div>
        </template>
      </SlideCrsl>
    </div>
  </section>
</template>
<script setup lang="ts">
import SlideCrsl from '@/components/slides/SlideCrsl.vue';
</script>
<style lang="scss" scoped>
.inner {
  max-width: 1034px;
}
.carosel-wrapper {
  margin: auto;
  background-color: var(--color-vue-green-light-0);
}
:deep(.carousel__item) {
  min-height: 450px;
  width: 100%;
  background-color: var(--color-vue-green-light-1);
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.carousel:hover :deep(.carousel__prev),
.carousel:hover :deep(.carousel__next) {
  opacity: 1;
}

:deep(.carousel__slide) {
  padding: 0 5px;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  opacity: 0;
  transition: 0.3s;
}
</style>
