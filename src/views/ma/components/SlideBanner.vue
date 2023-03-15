<template>
  <section class="carosel-wrapper">
    <div class="inner">
      <SlideCrsl :autoplay="4000" :wrap-around="true">
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
.carousel {
  margin-top: 15px;
}
:deep(.carousel__item) {
  min-height: 300px;
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
  box-sizing: border-box;
  border-radius: 50%;
  background-color: rgba($color: #fff, $alpha: 0.5);
  margin: 0 20px;
  width: 40px;
  height: 40px;
  opacity: 0;
  transition: 0.3s;
}

:deep(.carousel__pagination) {
  margin: 0;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: auto;
}
:deep(.carousel__pagination-button::after) {
  display: block;
  content: '';
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #fff;
  box-sizing: border-box;
  // border: 3px solid var(--color-vue-black);
  border: 2px solid var(--color-vue-black);
  background-color: white;
}
:deep(.carousel__pagination-button--active::after) {
  background-color: var(--color-vue-black);
}
</style>
