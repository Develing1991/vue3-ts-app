<template>
  <section class="inner products-wrapper">
    <!-- <ProdMainText v-bind="{ text: $attrs.text as string, isMore: $attrs.isMore as boolean }" />
    <ProdCardList :col="($attrs.col as number)"> -->
    <ProdMainText :text="text" :is-more="isMore" />
    <ProdCardList :col="col">
      <ProdCardItem v-for="i in 4" :key="i" />
    </ProdCardList>
  </section>
</template>

<script setup lang="ts">
import ProdCardList from '@/components/cards/ProdCardList.vue';
import ProdCardItem from '@/components/cards/ProdCardItem.vue';
import ProdMainText from './ProdMainText.vue';

defineProps<Props>();
</script>

<script lang="ts">
export default {
  inheritAttrs: false
};
export interface Props {
  text: string;
  isMore: boolean;
  col?: number;
}
</script>

<style scoped lang="scss">
.products-wrapper {
  margin-top: 50px;
}
</style>
