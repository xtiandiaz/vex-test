<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useFetch } from '@vueuse/core';
import type { Product } from '@/types';
import PriceTag from '@/components/PriceTag.vue';
import RatingTag from '@/components/RatingTag.vue';
import ReviewItem from '@/components/ReviewItem.vue';

const URL = 'https://dummyjson.com/products'

const { id } = defineProps<{
  id: string
}>()

const { isFetching, error, data: product } = useFetch(`${URL}/${id}`).json<Product>()
</script>

<template>
  <nav class="flex items-center bg-brand h-12 px-4">
    <RouterLink to="/catalog" class="text-white">Back to catalog</RouterLink>
  </nav>
  
  <main class="flex flex-col gap-8 items-center mx-auto my-8 max-w-4xl">
    <div v-if="isFetching">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <section 
      v-else-if="product"
      class="bg-slate-100 rounded-xl p-2"
    >
      <div class="flex p-6">
        <div>
          <h1 class="text-3xl font-bold">{{ product.title }}</h1>
          <p class="text-lg">{{ product.brand }}</p>
          <div class="flex gap-4 items-center">
            <PriceTag 
              :price="product.price" 
              :discount-percentage="product.discountPercentage" 
              class="text-3xl"
            />
            <span class="text-sm font-bold">Stock: {{ product.stock }}</span>
          </div>
        </div>
        <div class="grow"></div>
        <div>
          <RatingTag v-if="product.rating" :rating="product.rating" class="text-lg" />
        </div>
      </div>
      <div class="flex flex-nowrap gap-2 h-96 overflow-x-auto">
        <img 
          v-for="(src, index) of product.images" 
          :key="index"
          :src="src" 
          :alt="product.title + index"
          class="bg-white rounded-sm grow object-contain"
        />
      </div>
      <div class="p-6">
        <p>{{ product.description }}</p>
        <br />
        <ul class="list-disc">
          <li>Dimensions: {{ Object.values(product.dimensions).join(' × ') }}</li>
          <li>{{ product.shippingInformation }}</li>
          <li>{{ product.warrantyInformation }}</li>
        </ul>
      </div>
    </section>
    <div v-else>Not found</div>
    
    <section 
      v-if="product?.reviews"
      class="flex flex-col gap-4 w-full px-8"
    >
      <h2 class="text-2xl font-bold">Reviews</h2>
      <ReviewItem v-for="(review, index) of product.reviews"
        :key="index"
        :review="review"
      />
    </section>
  </main>
</template>
