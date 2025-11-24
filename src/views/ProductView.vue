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
  <div v-if="isFetching">Loading...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <div v-else>{{ product?.brand }}</div>
</template>
