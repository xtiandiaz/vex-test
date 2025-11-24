<script setup lang="ts">
import { useFetch } from '@vueuse/core';
import type { Catalog } from '@/types';
import ProductItem from '@/components/ProductItem.vue';

const URL = 'https://dummyjson.com/products'

const { isFetching, error, data } = useFetch(URL).json<Catalog>()
</script>

<template>
  <div v-if="isFetching">Loading...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <div v-else-if="data && data.products.length > 0">
    <ProductItem v-for="(item) of data.products"
      :key="item.id"
      :item="item"
    />
  </div>
  <div v-else>No results</div>
</template>
