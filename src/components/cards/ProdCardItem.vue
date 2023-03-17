<template>
  <div class="product-item">
    <RouterLink to="/" class="image-area">
      <img
        src="https://greenpng.com/wp-content/uploads/2020/09/untitleddesign_1_original-1-300x300.png"
        alt="image"
      />
    </RouterLink>
    <ul class="description">
      <li class="brand">brand</li>
      <li class="title elipsis-2">
        <h4>
          {{ item }}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt unde, magni sapiente
          praesentium explicabo, totam necessitatibus perspiciatis sint voluptatibus harum
          voluptatem soluta facere dolor rerum atque aut iure nemo ullam.
        </h4>
      </li>
      <li class="info">
        <span class="rate">15%</span>
        <span class="discount">15,000</span>
        <span class="price">30,000</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<Props>();
</script>
<script lang="ts">
interface Props {
  item?: number; //object
}
</script>

<style scoped lang="scss">
.image-area {
  display: block;
}

.description {
  word-break: keep-all;
  padding: 10px;
  line-height: 1.25rem;

  .brand {
    font-size: 0.875rem;
  }
  .title {
    font-size: 1rem;
    cursor: pointer;
  }

  .info {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 10px;
    .rate,
    .discount {
      font-size: 1.125rem;
    }
    .rate {
      font-weight: 700;
      color: var(--color-vue-green-dark-0);
    }
    .discount {
      font-weight: 800;
      color: var(--color-vue-green-dark-1);
    }
    .price {
      font-size: 0.8125rem;
      text-decoration: line-through;
      line-height: normal;
      color: #6c6a6a;
    }
  }
}
</style>
