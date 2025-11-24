<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { ProductItem } from '@/types';

defineProps<{
  item: ProductItem
}>()
</script>

<template>
  <RouterLink :to="`product/${item.id}`">
    {{ item.title }}
  </RouterLink>
</template>
