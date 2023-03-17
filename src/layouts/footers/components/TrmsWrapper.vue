<template>
  <ul class="trms-wrapper">
    <li>
      <RouterLink to="/">이용약관</RouterLink>
    </li>
    <li>
      <RouterLink to="/">개인정보처리방침</RouterLink>
    </li>
    <li>
      <RouterLink to="/">취소 및 환불방식</RouterLink>
    </li>
    <li>
      <RouterLink to="/">연락하기</RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.trms-wrapper {
  display: flex;
  gap: 20px;
  a:hover {
    color: white;
    background-color: var(--color-vue-green);
    border-radius: 5px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
}

a {
  padding: 8px 10px;
}
</style>
