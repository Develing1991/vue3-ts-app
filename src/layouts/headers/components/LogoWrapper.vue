<template>
  <div class="logo-wrapper">
    <div class="left-area">
      <h1 class="logo">
        <RouterLink to="/">
          <!-- <div>dd</div> -->
          <img src="@/assets/logo.svg" alt="메인 로고" />
        </RouterLink>
      </h1>
    </div>
    <div class="right-area">
      <div class="search">
        <InputSearch />
      </div>

      <ul class="menus">
        <li v-for="(menu, index) in ['로그인', '회원가입', '장바구니']" :key="index">
          <RouterLink to="/">{{ menu }}</RouterLink>
        </li>
      </ul>
      <div class="menu-icon">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import InputSearch from '@/components/inputs/InputSearch.vue';
</script>
<style lang="scss" scoped>
.logo-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  word-break: keep-all;
}

.left-area,
.right-area {
  width: 100%;
  align-items: center;
}

.logo {
  margin-left: 20px;
  a {
    padding: 10px 20px 10px 0px;
    width: 70px;
    height: 70px;
    display: block;
    img {
      width: 50px;
      height: 50px;
    }
  }
}

.right-area {
  display: flex;
  justify-content: flex-end;
}
.menus {
  display: flex;
  align-items: center;
  margin-right: 10px;
  li {
    padding: 5px 10px;
    cursor: pointer;
    &:first-child {
      margin-left: 10px;
    }
    a {
      font-weight: 700;
    }
    &:hover a {
      color: black;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
}
.menu-icon {
  display: none;
  margin: 0 10px;
  padding: 10px;
  // display: flex;
  align-items: center;
  font-size: 28px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: flex;
  }
}
</style>
