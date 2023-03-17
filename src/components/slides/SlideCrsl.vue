<template>
  <Carousel
    :itemsToShow="itemsToShow"
    :itemsToScroll="itemsToScroll"
    :wrapAround="wrapAround"
    :snapAlign="snapAlign"
    :transition="transition"
    :autoplay="autoplay"
    :settings="settings"
    :breakpoints="breakpoints"
    :modelValue="modelValue"
    :mouseDrag="mouseDrag"
    :touchDrag="touchDrag"
    :pauseAutoplayOnHover="pauseAutoplayOnHover"
    :dir="dir"
  >
    <Slide v-for="slide in items" :key="slide">
      <slot name="item" :slide="slide"></slot>
    </Slide>

    <template #addons>
      <Navigation v-if="hasNavi" />
      <Pagination v-if="hasPage" />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

withDefaults(defineProps<CarouselConfig>(), {
  itemsToShow: 1,
  itemsToScroll: 1,
  wrapAround: false,
  snapAlign: 'center',
  transition: 300,
  autoplay: 0,
  settings: () => ({}),
  breakpoints: undefined,
  modelValue: 0,
  mouseDrag: true,
  touchDrag: true,
  pauseAutoplayOnHover: false,
  dir: 'ltr',
  hasNavi: true,
  hasPage: true,
  items: () => [1, 2] //object array
});
</script>

<!-- style -->
<style lang="scss" scoped>
.carousel {
  margin-top: 15px;
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

<!-- types -->
<script lang="ts">
type Breakpoints = { [key: number]: Partial<CarouselConfig> };

type SnapAlign = 'start' | 'end' | 'center' | 'center-even' | 'center-odd';

type Dir = 'rtl' | 'ltr';
interface CarouselConfig {
  itemsToShow?: number; //
  itemsToScroll?: number; //
  modelValue?: number;
  transition?: number;
  throttle?: number;
  autoplay?: number;
  snapAlign?: SnapAlign; //
  wrapAround?: boolean;
  pauseAutoplayOnHover?: boolean;
  mouseDrag?: boolean;
  touchDrag?: boolean;
  dir?: Dir;
  breakpoints?: Breakpoints;
  settings?: Partial<CarouselConfig>;
  hasNavi?: boolean;
  hasPage?: boolean;
  items: number[]; //object[]
}
</script>
