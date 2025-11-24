<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { ProductItem } from '@/types';

defineProps<{
  item: ProductItem
}>()
</script>

<template>
  <RouterLink :to="`product/${item.id}`">
    <article>
      <img :src="item.thumbnail" :alt="item.title" />
      <h3>{{ item.title }}</h3>
      <h4>{{ item.brand }}</h4>
      <h4>{{ item.price }}</h4>
    </article>
  </RouterLink>
</template>
