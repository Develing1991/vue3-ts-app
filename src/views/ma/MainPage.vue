<template>
  <SlideBanner />
  <LinkBanner />
  <ProdBanner text="최신 인기 상품 ChatGPT4" is-more :col="4" />
  <ProdBanner text="최신 고가 상품 ChatGPT4" is-more :col="4" />
  <ProdBanner text="최신 추천 상품 ChatGPT4" is-more :col="2" />
</template>
<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import SlideBanner from './components/SlideBanner.vue';
import ProdBanner from './components/ProdBanner.vue';
import LinkBanner from './components/LinkBanner.vue';
</script>
<style lang="scss" scoped></style>
