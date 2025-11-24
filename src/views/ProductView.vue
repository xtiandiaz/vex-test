<script setup lang="ts">
import { useFetch } from '@vueuse/core';
import type { Product } from '@/types';

const URL = 'https://dummyjson.com/products'

const { id } = defineProps<{
  id: number
}>()

const { isFetching, error, data: product } = useFetch(`${URL}/${id}`).json<Product>()
</script>

<template>
  <main>
    <div v-if="isFetching">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <section v-else-if="product">
      <h1>{{ product.title }}</h1>
      <h2>{{ product.brand }}</h2>
      <h2>{{ product.price }}</h2>
      <p>{{ product.description }}</p>
    </section>
    <div v-else>Not found</div>
  </main>
</template>
