<template>
  <section class="inner">
    <Carousel>
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>
<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
</script>
<style lang="scss" scoped>
.carousel__item {
  min-height: 300px;
  width: 100%;
  background-color: var(--color-vue-green-light-1);
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.carousel:hover :deep(.carousel__prev),
.carousel:hover :deep(.carousel__next) {
  opacity: 1;
}

.carousel__slide {
  margin-top: 10px;
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

.carousel__pagination {
  margin: 0;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: auto;
}
.carousel__pagination-item {
  //background-color: white;
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
