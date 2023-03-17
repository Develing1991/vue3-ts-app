<template>
  <SlideBanner />
  <LinkBanner />
  <ProdBanner text="최신 인기 상품 ChatGPT4" is-more :col="4" :items="[1, 2, 3, 4]" />
  <ProdBanner text="최신 고가 상품 ChatGPT4" is-more :col="4" :items="[1, 2, 3, 4]" />
  <ProdBanner text="최신 추천 상품 ChatGPT4" is-more :col="3" :items="[1, 2, 3]" />
  <AdmtBanner />
  <TestBanner text="최신 인기 상품 ChatGPT4" :items="[1, 2, 3, 4, 5, 6, 7, 8]" />
</template>
<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import SlideBanner from './components/SlideBanner.vue';
import ProdBanner from './components/ProdBanner.vue';
import LinkBanner from './components/LinkBanner.vue';
import AdmtBanner from './components/AdmtBanner.vue';
import TestBanner from './components/TestBanner.vue';
</script>
<style lang="scss" scoped></style>
