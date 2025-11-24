<script setup lang="ts">
import type { ProductItem } from '@/types';

defineProps<{
  item: ProductItem
}>()
</script>

<template>
  {{ item }}
</template>
