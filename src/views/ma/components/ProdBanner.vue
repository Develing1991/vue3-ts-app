<template>
  <section class="inner products">
    <ProdMainText v-bind="$attrs" />
    <ProdCardList :col="4">
      <ProdCardItem v-for="i in 4" :key="i" />
    </ProdCardList>
  </section>
</template>

<script setup lang="ts">
import ProdCardList from '@/components/cards/ProdCardList.vue';
import ProdCardItem from '@/components/cards/ProdCardItem.vue';
import ProdMainText from './ProdMainText.vue';
</script>

<script lang="ts">
export default {
  inheritAttrs: false
};
</script>

<style scoped lang="scss">
.products {
  margin-top: 50px;
}
</style>
