<template>
  <section class="inner products-wrapper">
    <ProdMainText :text="text" :is-more="isMore" />
    <SlideCrsl :items="items" :has-page="false" :has-navi="true" :breakpoints="breakpoints">
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
import { ref } from 'vue';
withDefaults(defineProps<Props>(), {
  isMore: false
});
// :items-to-show="4"
//       :snap-align="'start'"
// const aa = ref({
//   itemsToShow: 4,
//   snapAlign: 'center'
// });
const breakpoints = ref({
  0: {
    itemsToShow: 1,
    snapAlign: 'center'
  },
  280: {
    itemsToShow: 2,
    snapAlign: 'start'
  },
  480: {
    itemsToShow: 3,
    snapAlign: 'start'
  },
  768: {
    itemsToShow: 4,
    snapAlign: 'start'
  }
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
