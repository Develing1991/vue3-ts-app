<template>
  <section class="inner ad-wrapper">
    <SlideCrsl
      :items="[1, 2]"
      :autoplay="4000"
      :wrap-around="true"
      :has-page="false"
      :has-navi="false"
    >
      <template #item="{ slide }">
        <div class="carousel__item">ad - {{ slide }}</div>
      </template>
    </SlideCrsl>
  </section>
</template>

<script setup lang="ts">
import SlideCrsl from '@/components/slides/SlideCrsl.vue';
</script>

<style lang="scss" scoped>
.ad-wrapper {
  margin-top: 80px;
  @media screen and (max-width: 480px) {
    margin-top: 40px;
  }
}
:deep(.carousel__item) {
  min-height: 150px;
  width: 100%;
  background-color: var(--color-vue-green-light-1);
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    min-height: 100px;
  }
}
</style>
