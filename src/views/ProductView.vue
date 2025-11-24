<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useFetch } from '@vueuse/core';
import type { Product } from '@/types';

const URL = 'https://dummyjson.com/products'

const { id } = defineProps<{
  id: string
}>()

const { isFetching, error, data: product } = useFetch(`${URL}/${id}`).json<Product>()
</script>

<template>
  <nav class="p-4">
    <RouterLink to="/catalog">Back to catalog</RouterLink>
  </nav>
  <main class="flex flex-col items-center m-8">
    <div v-if="isFetching">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <section 
      v-else-if="product"
      class="bg-stone-100 rounded-xl p-8 max-w-4xl"
    >
      <h1 class="text-3xl font-bold">{{ product.title }}</h1>
      <h2 class="text-xl">{{ product.brand }}</h2>
      <div class="flex flex-nowrap w-full h-96 overflow-x-scroll">
        <img v-for="(src, index) of product.images" 
          :key="index"
          :src="src" 
          :alt="product.title + index"
        />
      </div>
      <div>
        <h2 class="text-xl font-bold">{{ product.price }}</h2>
        <p>{{ product.description }}</p>
      </div>
    </section>
    <div v-else>Not found</div>
  </main>
</template>
