<template>
  <section class="inner products-wrapper">
    <!-- <ProdMainText v-bind="{ text: $attrs.text as string, isMore: $attrs.isMore as boolean }" />
    <ProdCardList :col="($attrs.col as number)"> -->
    <ProdMainText :text="text" :is-more="isMore" />
    <ProdCardList :col="col">
      <ProdCardItem v-for="i in items" :key="i" />
    </ProdCardList>
  </section>
</template>

<script setup lang="ts">
import ProdCardList from '@/components/cards/ProdCardList.vue';
import ProdCardItem from '@/components/cards/ProdCardItem.vue';
import ProdMainText from './ProdMainText.vue';

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
  isMore: boolean;
  col?: number;
  items?: number[]; //Array<object>
}
</script>

<style scoped lang="scss">
.products-wrapper {
  margin-top: 50px;
}
</style>
