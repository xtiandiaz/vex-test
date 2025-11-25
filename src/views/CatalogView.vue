<script setup lang="ts">
import { computed, ref } from 'vue';
import { useFetch } from '@vueuse/core';
import type { Catalog } from '@/types';
import ProductItem from '@/components/ProductItem.vue';
import SearchField from '@/components/SearchField.vue';

const BASE_URL = 'https://dummyjson.com/products'

const searchTerm = ref<string>()

const url = computed(() => {
  if (searchTerm.value) {
    return `${BASE_URL}/search?q=${searchTerm.value}`
  }
  return BASE_URL
})

const { isFetching, error, data } = useFetch(url, { refetch: true }).json<Catalog>()
</script>

<template>
  <nav class="flex justify-center items-center bg-brand text-white h-12">
    <span class="font-bold text-xl">💸 Catalog</span>
  </nav>
  <main class="flex flex-col gap-8 items-center m-8">
    <SearchField @search-by="(term) => searchTerm = term" />
    
    <div v-if="isFetching">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <section 
      v-else-if="data && data.products.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl"
    >
      <ProductItem v-for="(item) of data.products"
        :key="item.id"
        :item="item"
      />
    </section>
    <div v-else>No results for "{{ searchTerm }}"</div>
  </main>
</template>
