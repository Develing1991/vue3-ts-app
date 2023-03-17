<template>
  <section class="inner products-wrapper">
    <ProdMainText :text="text" :is-more="isMore" />
    <SlideCrsl
      :items="items"
      :items-to-show="4"
      :snap-align="'start'"
      :has-page="false"
      :has-navi="true"
    >
      <template #item="{ slide }">
        <ProdCardItem :item="slide" />
      </template>
    </SlideCrsl>
  </section>
</template>

<script setup lang="ts">
import ProdCardItem from '@/components/cards/ProdCardItem.vue';
import ProdMainText from './ProdMainText.vue';
import SlideCrsl from '@/components/slides/SlideCrsl.vue';
withDefaults(defineProps<Props>(), {
  isMore: false
});
</script>

<script lang="ts">
export default {
  inheritAttrs: false
};
export interface Props {
  text: string;
  isMore?: boolean;
  // col?: number;
  items?: number[]; //Array<object>
}
</script>

<style scoped lang="scss">
.products-wrapper {
  margin-top: 80px;
}
:deep(.carousel__prev),
:deep(.carousel__next) {
  top: 0;
  bottom: 0;
  margin: auto 20px;
}
</style>
