<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { ProductItem } from '@/types';

defineProps<{
  item: ProductItem
}>()
</script>

<template>
  <RouterLink :to="`product/${item.id}`">
    <article class="bg-stone-100 rounded-lg p-4">
      <img 
        :src="item.thumbnail" 
        :alt="item.title" 
        class="h-48 mx-auto"
      />
      <div>
        <h3 class="font-bold">{{ item.title }}</h3>
        <h4 class="text-xl">{{ item.price }}</h4>
        <h4 class="font-semibold">{{ item.brand }}</h4>
      </div>
    </article>
  </RouterLink>
</template>
