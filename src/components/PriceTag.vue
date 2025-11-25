<script setup lang="ts">
const { price, discountPercentage } = defineProps<{
  price: number,
  discountPercentage?: number
}>()

const priceBeforeDiscount = discountPercentage 
  ? Math.ceil(price / (1 - discountPercentage / 100))
  : undefined
</script>

<template>
  <div class="flex gap-2 text-xl">
    <span v-if="priceBeforeDiscount" class="line-through text-slate-500">
      ${{ priceBeforeDiscount }}
    </span>
    <span class="font-bold text-pink-600">${{ price }}</span>
  </div>
</template>
