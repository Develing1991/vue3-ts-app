<template>
  <section class="inner links-wrapper">
    <ul class="links">
      <li v-for="i in 20" :key="i" class="link">
        <RouterLink to="/" class="image-area">
          <img
            src="https://greenpng.com/wp-content/uploads/2020/09/untitleddesign_1_original-1-300x300.png"
            alt=""
          />
        </RouterLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.links-wrapper {
  margin-top: 50px;
  overflow-x: auto;
}
.image-area {
  display: block;
  // max-width: 100px;
}

.links {
  min-width: 1024px;
  display: flex;
  gap: 15px;
  padding: 0 15px;
}
.link {
  flex: 1;
  min-width: 12%;

  @media screen and (max-width: 768px) {
    min-width: 9%;
  }
  @media screen and (max-width: 768px) {
    min-width: 7%;
  }
}
</style>
