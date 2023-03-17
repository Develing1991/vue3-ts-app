<template>
  <footer>
    <TrmsWrapper />
    <CorpWrapper />
  </footer>
</template>
<script setup lang="ts">
import TrmsWrapper from './components/TrmsWrapper.vue';
import CorpWrapper from './components/CorpWrapper.vue';
</script>

<style lang="scss" scoped>
footer {
  margin-top: 100px;
  font-size: 0.875rem;
}
</style>
