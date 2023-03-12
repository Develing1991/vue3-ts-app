<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

const initialUrl = 'https://swapi.dev/api/species/'
const fetchUrl = async () => {
  const response = await fetch(initialUrl)
  return response.json()
}

const { isLoading, isFetching, isError, data, error } = useQuery({
  queryKey: ['todos'],
  queryFn: fetchUrl
})
</script>
<template lang="">
  <header>
    <h1>
      <a href="">logo</a>
    </h1>
    <ul>
      <li>
        <a href="">menu1</a>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100px;
}
h1 {
  a {
    color: red;
  }
}
</style>
