<script setup lang="ts">
import type { Review } from '@/types';
import RatingTag from './RatingTag.vue';

defineProps<{
  review: Review
}>()
</script>

<template>
  <div>
    <div class="flex gap-8">
      <RatingTag :rating="review.rating" />
    </div>
    <p>{{ review.comment }}</p>
    <p class="text-sm">
      <span class="font-bold">{{ review.reviewerName }}</span> •
      {{ new Date(review.date).toLocaleDateString('ddMMYY') }}
    </p>
  </div>
</template>
