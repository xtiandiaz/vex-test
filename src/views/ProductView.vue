<script setup lang="ts">
import { RouterLink } from 'vue-router';
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
    <nav>
      <RouterLink to="/catalog">Back to catalog</RouterLink>
    </nav>
    
    <div v-if="isFetching">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <section v-else-if="product">
      <h1>{{ product.title }}</h1>
      <img v-for="(src, index) of product.images" 
        :key="index"
        :src="src" 
        :alt="product.title + index"
      />
      <summary>
        <h2>{{ product.brand }}</h2>
        <h2>{{ product.price }}</h2>
        <p>{{ product.description }}</p>
      </summary>
    </section>
    <div v-else>Not found</div>
  </main>
</template>
