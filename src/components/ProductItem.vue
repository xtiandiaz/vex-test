<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { ProductItem } from '@/types';
import PriceTag from './PriceTag.vue';
import RatingTag from './RatingTag.vue';

const { item } = defineProps<{
  item: ProductItem
}>()
</script>

<template>
  <RouterLink :to="`product/${item.id}`">
    <article class="flex flex-col gap-2 bg-slate-100 rounded-xl p-2">
      <div class="bg-white rounded-sm relative">
        <img 
          :src="item.thumbnail" 
          :alt="item.title" 
          class="h-48 mx-auto"
        />
        <RatingTag 
          v-if="item.rating" 
          :rating="item.rating" 
          class="absolute top-2 right-2 text-sm"
        />
      </div>
      <div class="p-2">
        <p class="font-bold">{{ item.title }}</p>
        <p class="text-sm">{{ item.brand }}</p>
        <PriceTag :price="item.price" :discount-percentage="item.discountPercentage" />
      </div>
    </article>
  </RouterLink>
</template>
