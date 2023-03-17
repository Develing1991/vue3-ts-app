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
    <Slide v-for="slide in adItem" :key="slide">
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
  addItem: []
});
</script>

<!-- style -->
<style lang="scss" scoped></style>

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
  adItem: number[]; //object[]
}
</script>
